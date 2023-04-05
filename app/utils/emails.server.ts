export enum EMAIL_EVENTS {
  "create_account" = "create_account",
  "dracula" = "dracula",
}

export function sendWelcomeEmail(email: string) {
  return sendPlunkEvent(email, EMAIL_EVENTS.create_account);
}

export function sendDraculaEmail(email: string) {
  return sendPlunkEvent(email, EMAIL_EVENTS.dracula);
}

function sendPlunkEvent(email: string, event: EMAIL_EVENTS) {
  const EMAIL_API_KEY = process.env.PLUNK_SECRET_API_KEY;

  if (!EMAIL_API_KEY) {
    console.log("No email API key");
    return;
  }

  return fetch("https://api.useplunk.com/v1/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${EMAIL_API_KEY}`,
    },
    body: JSON.stringify({ event, email }),
  });
}
