export function track(event: string, value: number = 0) {
  window?.fathom?.trackGoal(event, value);
}

export const events = {
  START_SCENARIO: "V48SBBAS",
  SEND_PROMPT: "3CLXH7WS",
  START_QUIZ: "U081RJEW",
  SKIP_QUIZ: "KB8IMEMJ",
  SIGNUP_FOR_DRACULA: "CCMKJTO5",
};
