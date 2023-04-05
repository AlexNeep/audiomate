import { ActionFunction, json } from "@remix-run/node";
import { updateUserProfile } from "~/utils/db.server";
import { sendWelcomeEmail } from "~/utils/emails.server";
import { SUBSCRIBED_USER_MESSAGES } from "~/utils/payment";
import { getUserSession } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userToken = await getUserSession(request);

  if (!userToken) return json({}, { status: 500 });

  const formData = await request.formData();
  const email = (formData.get("email") as string) ?? "";

  updateUserProfile(userToken?.uid, {
    email: email,
    messages: SUBSCRIBED_USER_MESSAGES.free,
  });
  sendWelcomeEmail(email);

  return json({ success: true });
};
