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

export interface BeforeAfterExample {
  id: string;
  scenario: string;
  userContext: string;
  prompt: string;
  withoutRyos: {
    label: string;
    response: string;
    problems: string[];
  };
  withRyos: {
    label: string;
    response: string;
    improvements: string[];
  };
}
