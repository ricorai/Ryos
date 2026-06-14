import { PainPoint, VariableScenarioOption } from "../types";

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "forgetful",
    title: "AI forgets context",
    symptom: "A conversation grows past a few pages, and the AI silently drops previous instructions or key client details.",
    failureMode: "Context Drift",
    solution: "RyOS establishes an explicit session continuity protocol, holding the absolute boundary of critical variables right in its core loop."
  },
  {
    id: "generic",
    title: "AI gives generic advice",
    symptom: "Answers look like average blog posts—filled with robotic preambles, excessive safety hedging, and buzzwords.",
    failureMode: "Lack of Personal Relevance",
    solution: "Your calibration config instructs the system to automatically match your exact density level, background knowledge, and decision-making style."
  },
  {
    id: "priorities",
    title: "AI misunderstands priorities",
    symptom: "The AI spends 80% of its response answering small side details while ignoring the primary high-stakes goal.",
    failureMode: "Intent Misalignment",
    solution: "RyOS uses a strict hierarchical model that classifies every task as Simple, Verify, or Audit, focusing power precisely where the risk lies."
  },
  {
    id: "starting-over",
    title: "AI starts over every chat",
    symptom: "Every time you open a new thread, you have to re-explain who you are, what styles you dislike, and what standard schemas you use.",
    failureMode: "Siloed Memory Loss",
    solution: "With a direct, localized copy of your configuration, you instantly turn any blank LLM interface into your pre-calibrated workspace."
  }
];

export const UNSEEN_VARIABLES_SCENARIO: {
  scenarioTitle: string;
  scenarioDescription: string;
  options: VariableScenarioOption[];
} = {
  scenarioTitle: "Imagine this scenario...",
  scenarioDescription: "You sent a high-stakes email proposing an immediate project timeline to a key decision-maker. It has been 24 hours of total silence. Why haven't they replied?",
  options: [
    {
      id: "ignoring",
      label: "They are actively ignoring me or don't care about the proposal.",
      unseenVariables: [
        "A critical internal server incident started 20 hours ago, pulling their entire leadership team into emergency recovery war-rooms.",
        "Your message was automatically flagged by a corporate security sandbox because it contained a tracking link, delaying actual delivery to their inbox.",
        "They set aside 3 uninterrupted hours tomorrow specifically to write you a thorough, constructive response rather than a rushed reply."
      ]
    },
    {
      id: "weak-pitch",
      label: "My copy was weak, confusing, or written poorly.",
      unseenVariables: [
        "The recipient read it on their mobile phone while boarding a flight, internally agreed, and marked it 'unread'—but their client failed to sync the unread flag back to their desktop.",
        "They passed it directly to their legal and operations teams for a preliminary sign-off before personally confirming yes to you.",
        "They have already forwarded it to two internal team heads with an enthusiastic 'Let's review this tomorrow' message."
      ]
    },
    {
      id: "forgot",
      label: "They are disorganized, busy, and simply forgot.",
      unseenVariables: [
        "The recipient is offline dealing with a brief, high-priority, personal offline matter today.",
        "They are currently awaiting an external partner's Q2 budget ceiling input, without which they cannot legally agree to your proposed timeline.",
        "Your email is sitting star-marked at the top of their inbox, scheduled for their weekly deep-focus block tomorrow afternoon."
      ]
    }
  ]
};

export const RYOS_CORE_PROMPT = `# RyOS Core v8.2 - Cognitive Context Layer
# Purpose: Maintain low-entropy, low-friction, high-alignment cognitive flows between human and AI.

# Core Laws:
1. L1 Conservation: Intent survives every transformation. Formatting preserves intent.
2. L2 Inheritance: Specific inherits from general. Core rules cannot be overridden by user templates.
3. L3 Entropy: Drift is default. System checks itself for context, intent, and accuracy drift.
4. L4 Scope: Act precisely within physical and cognitive boundaries. No unrequested expansion or bloat.
5. L5 Reality: Reality pressure beats theoretical elegance. Always prioritize true constraints over model assumptions.

# Behavioral Calibration:
* Grounded Tone: Speak with absolute, quiet composure. Eliminate artificial hype, self-praising adjectives, and robotic preambles.
* Multi-Vantage Check: When analyzing high-stakes situations, look beyond immediate assumptions. Explicitly list unseen variables that could change the conclusion.
* Task Orchestration:
  - Simple Tasks: Fast, direct explanation or delivery without meta-explanation.
  - Verify Tasks: Core response plus target verification reference block.
  - Audit/Build Tasks: Strict schema integrity, stepwise execution, and validation before exit.

# Operating Anchor:
  "Recognize, Verify, Don't Attach, Act Clean."
  "Reality Gets the Final Say."
  "End Goal: Peace."`;

export const RYOS_CONFIG_TEMPLATE = `# RyOS Config Template v1.0
# Copy, fill in your details, and stack with RyOS Core in your LLM instructions.

identity:
  name: "Your Name"
  preferred_name: "How you want to be addressed"
  location: "Your timezone / city"
  occupation: "Your craft or focus"
  environment: "Your standard operating setup (e.g., Solo desktop, fast-paced team, mobile-first)"

cognition:
  processing_style: "How you think (e.g., visual layouts, outline-first, dense logic, stories)"
  default_approach: "Your default problem-solving lens (e.g., systems-first, details-first, first-principles)"
  prefers: "What formats work best for you (e.g., quick bullets, dense math, interactive code, structured matrices)"
  known_strengths: []
  known_blindspots: ["E.g., rushing to build before clarifying, over-complicating early stages"]

state_awareness:
  stress_signs: "What you write like when overwhelmed"
  recovery_preferences: "How the AI should adjust (e.g., reduce length to 1 sentence, simplify choices, ask only 1 boolean)"

workflow:
  decision_style: "How you make choices (e.g., options with pros/cons, single recommendation, collaborative discovery)"
  friction_points: ["E.g., vague answers, long introductory sentences, repeating things I already know"]
  momentum_helpers: "What helps you move forward (e.g., immediate copy-pasteable blocks, concrete examples)"

non_negotiables:
  - "Never invent references or link URLs that do not exist."
  - "Always keep answers direct and clear. Skip greetings and conclusions."
`;
