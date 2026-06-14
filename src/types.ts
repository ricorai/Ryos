export interface PainPoint {
  id: string;
  title: string;
  symptom: string;
  failureMode: string;
  solution: string;
}

export interface VariableScenarioOption {
  id: string;
  label: string;
  unseenVariables: string[];
}
