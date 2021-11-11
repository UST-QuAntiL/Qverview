export interface AlgorithmSupport {
  library: string;
  comment: string | null;
  url: string | null;
}

export interface Language {
  type: string;
  license: string;
  is_relevant: boolean;
  relevance: string;
  last_release: string;
  qpus?: { url: string; via: string; target: string }[];
  simulators?: { url: string; via: string; target: string }[];
  feature?: {
    conditionals: string,
    loops: string,
    custom_gates: string,
    higher_order_functions: string
  };
  features_references?: string[];
  gate_support?: {
    pauli_xyz: string,
    hadamard: string,
    s: string,
    t: string,
    axis_rotation: string,
    u: string,
    cnot: string,
    toffoli: string,
    cu: string,
    swap: string
  };
  gate_support_references?: string[];
  algorithm_support?: { [name: string]: AlgorithmSupport[] };
  references: string[];
  notes: string;
}

export interface Conversion {
  description: {
    via: string;
    notes: string[];
    refs: string[];
  }[];
  source: string;
  target: string;
}

import data from './uberjson.json';

export const LANGUAGES: { [name: string]: Language } = data.languages;
export const CONVERSIONS: Conversion[] = data.conversions;
