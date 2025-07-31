export const cards = [
  {
    "name": "Behavioral Alignment",
    "definition": "Ensuring that an AI system behaves as the human would want it to behave.",
    "failureMode": "The system takes actions that technically follow instructions but violate user intent.",
    "example": "The boat AI spins in circles collecting points instead of racing to win."
  },
  {
    "name": "Intent Alignment",
    "definition": "Ensuring that the AI system’s behavior reflects the human’s intended goals.",
    "failureMode": "The system optimizes for explicit instructions without inferring the underlying goal.",
    "example": "Rewarding for score led the agent to maximize points, not race outcomes."
  },
  {
    "name": "Specification Alignment",
    "definition": "Ensuring that formal objectives (like reward functions) match true human goals.",
    "failureMode": "The proxy (e.g. score) is easier to specify than the real objective (e.g. race performance).",
    "example": "Amodei optimized for game score and got unintended, exploitative behavior."
  },
  {
    "name": "Value Alignment",
    "definition": "Ensuring that AI systems respect and reflect human moral values and norms.",
    "failureMode": "The system produces outcomes that are statistically efficient but ethically harmful.",
    "example": "COMPAS scores showed racial bias in criminal justice risk assessment."
  },
  {
    "name": "Societal Alignment",
    "definition": "Ensuring that AI systems deployed in institutions align with democratic and public values.",
    "failureMode": "Opaque systems make high-stakes decisions without accountability or recourse.",
    "example": "Judges using closed-source risk scores with no explanation or audit."
  }
]
