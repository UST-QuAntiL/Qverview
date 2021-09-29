import csv
import json


def parse_platform_cell(cell: str):
  lines = cell.split('\n')
  results = []
  for line in lines:
    tokens = line.strip().split('-', 1)
    if len(tokens) < 2:
      continue
    convert_tokens = [t.strip() for t in tokens[0].split('via')]
    if len(convert_tokens) > 1:
      results.append(dict(target=convert_tokens[0], via=convert_tokens[1], url=tokens[1].strip()))
    else:
      results.append(dict(target=tokens[0].strip(), via=None, url=tokens[1].strip()))
  return results


def parse_algorithm_cell(cell: str):
  lines = cell.split('\n')
  results = []
  for line in lines:
    # Lines have format: <Library> (<notes>) - <reference URL>
    tokens = line.strip().split('-', 1)
    if len(tokens) < 2:
      continue

    # Library name might have format: Name (comment)
    library_name = tokens[0].strip().split('(')
    if len(library_name) > 1:
      comment = library_name[1][:-1]
      library_name = library_name[0]
    else:
      comment = None
      library_name = library_name[0]
    results.append(dict(library=library_name, comment=comment, url=tokens[1].strip()))
  return results


def parse_conversion_cell(cell: str):
  lines = cell.split('\n')
  methods = []
  current_method = {}
  for line in lines:
    line = line.strip()
    if not line:
      continue
    if not line.startswith('-'):
      if current_method:
        methods.append(current_method)
      current_method = dict(via=line, refs=[], notes=[])
    elif line.startswith('- http'):
      current_method['refs'].append(line[2:])
    else:
      current_method['notes'].append(line[2:])

  if current_method:
    methods.append(current_method)

  return methods


languages = dict()
conversions = dict()

with open('Fachstudie   - Translatability.csv') as csvfile:
  reader = csv.DictReader(csvfile)

  for row in reader:
    if not row['Name']:
      continue
    languages.setdefault(row['Name'], dict())
    for k, v in row.items():
      if k == 'Name':
        continue
      if v:
        languages.setdefault(k, dict())
        conversions[(row['Name'], k)] = parse_conversion_cell(v)

with open('Fachstudie   - Platform Support.csv') as csvfile:
  for row in csv.DictReader(csvfile):
    row_simulators = parse_platform_cell(row['Simulator'])
    row_qpus = parse_platform_cell(row['QPU'])

    language = languages.setdefault(row['Language'].strip(), dict())
    language.update(dict(simulators=row_simulators, qpus=row_qpus))

with open('Fachstudie   - Languages.csv') as csvfile:
  for row in csv.DictReader(csvfile):
    language = languages.setdefault(row['Name'].strip(), dict())
    language['type'] = row['Type'].strip()
    language['references'] = [url.strip() for url in row['References'].strip().split('\n')]
    language['is_relevant'] = row['Relevant?'].lower().startswith('yes')
    language['relevance'] = row['Relevant?'].strip()
    language['last_release'] = row['Last release'].strip()
    language['license'] = row['License'].strip()
    language['notes'] = row['Notes'].strip()

with open('Fachstudie   - Language Features.csv') as csvfile:
  for row in csv.DictReader(csvfile):
    language = languages.setdefault(row['Name'].strip(), dict())
    language['features'] = dict(
      conditionals=row['Conditionals'],
      loops=row['Loops'],
      custom_gates=row['Custom gates'],
      higher_order_functions=row['Higher-order functions'],
    )
    language['features_references'] = [url.strip() for url in row['References'].strip().split('\n')]

with open('Fachstudie   - Built-in Gates.csv') as csvfile:
  for row in csv.DictReader(csvfile):
    language = languages.setdefault(row['Name'].strip(), dict())
    language['gate_support'] = dict(
      pauli_xyz=row['Pauli(X, Y, Z)'],
      hadamard=row['Hadamard'],
      s=row['S'],
      t=row['T'],
      axis_rotation=row['Rotation(Rx, Ry, Rz)'],
      u=row['U'],
      cnot=row['CNOT'],
      toffoli=row['Toffoli / CCX'],
      cu=row['CU'],
      swap=row['SWAP'],
    )
    language['gate_support_references'] = [url.strip() for url in row['References'].strip().split('\n')]

TABLE_ALGORITHM_NAMES = ['HHL', 'Variational Quantum Eigensolver(VQE)', 'Quantum Approximate Optimization(QAOA)',
                         'Quantum Approximate Optimization(QAOA)Warm-starting', 'Variational Quantum Classifier(VQC)',
                         'Quantum Generative Adversarial Network(QGAN)', 'Evolution of Hamiltonian(EOH)', 'QSVM',
                         'Grover',
                         'QPE(Quantum Phase Estimation)', 'IQPE(Iterative Quantum Phase Est.)', 'Amplitude Est.',
                         'Deutsch-Jozsa', 'Bernstein-Vazirani', 'Shor', 'Simon', 'Binary Welded Tree(BWT)',
                         'Quantum Linear Systems(QLS)', 'Triangle Finding(TF)', 'Class Number(CL)',
                         'Unique Shortest Vector(USV)', 'Boolean Formula', 'Amplitude Amplification', 'Hidden Shift',
                         'Quantum Fourier Transform (QFT)']
NORMALIZED_ALGORITH_NAMES = ['hhl', 'vqe', 'qaoa', 'qaoa_warm', 'vqc', 'qgan', 'eoh', 'qsvm', 'grover', 'qpe', 'iqpe',
                             'amplitude_est', 'deutsch_josza', 'bernstein_vazirani', 'shor', 'simon', 'bwt',
                             'qls', 'tf', 'cl', 'usv', 'boolean_formula', 'amplitude_amplification', 'hidden_shift',
                             'qft']

with open('Fachstudie   - Algorithms (table).csv') as csvfile:
  for row in csv.DictReader(csvfile):
    language = languages.setdefault(row['Language'].strip(), dict())
    algorithm_support = {}
    for table_name, normalized_name in zip(TABLE_ALGORITHM_NAMES, NORMALIZED_ALGORITH_NAMES):
      support = parse_algorithm_cell(row[table_name])
      algorithm_support[normalized_name] = support
    language['algorithm_support'] = algorithm_support

conversions = [dict(source=f, target=t, description=v) for ((f, t), v) in conversions.items()]
with open('uberjson.json', 'w', encoding='utf-8') as fp:
  json.dump(dict(languages=languages, conversions=conversions), fp, indent=2)
