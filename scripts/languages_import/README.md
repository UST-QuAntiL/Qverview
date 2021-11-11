# Language Graph Data Import

The `uberjson.json` file can be generated from a set of CSV files exported from Google Docs.
The mapping of Google sheets to CSV files is as follows:

| Sheet name            | CSV Filename                             |
|-----------------------|------------------------------------------|
| Algorithms            | `Fachstudie   - Algorithms (table).csv`  |
| Built-in Gates        | `Fachstudie   - Built-in Gates.csv`      |
| Language Features     | `Fachstudie   - Language Features.csv`   |
| Languages             | `Fachstudie   - Languages.csv`           |
| OLD: Platform Support | `Fachstudie   - Platform Support.csv`    |
| Translatability       | `Fachstudie   - Translatability.csv`     |

`csv_to_uberjson.py` expects the CSV files to exist in the current working directory.
All scripts require at least Python 3.6
