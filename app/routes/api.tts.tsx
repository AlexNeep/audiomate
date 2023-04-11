import { ActionFunction, json } from "@remix-run/node";
import { getTextFromSpeech } from "~/models";

export const action: ActionFunction = async ({ request }) => {
  try {
    // const userToken = await getUserSession(request);

    // if (!userToken?.uid) return redirect("/login");

    // const userProfile = await getUserProfile(userToken.uid);
    // if (!isPremium(userProfile)) {
    //   return json({ error: "You need to be a premium user", text: "" });
    // }

    const formData = await request.formData();
    const audio = formData.get("audio") as Blob;
    const text = await getTextFromSpeech(audio);

    return json({ text });
  } catch (e) {
    console.log(e);
    return json({ error: e, text: "" });
  }
};
