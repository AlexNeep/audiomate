import { ActionFunction, json } from "@remix-run/node";
import { generateTextFromInput, getTextFromSpeech } from "~/models";
import invariant from "tiny-invariant";

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const audio = formData.get("audio") as Blob;
    const pastText = (formData.get("past_text") ?? "") as string;
    invariant(audio, "Audio is required");

    const text = await getTextFromSpeech(audio);
    console.log(text);
    const generatedResText = await generateTextFromInput(pastText, text);
    console.log(generatedResText);
    return json({ text: generatedResText });
  } catch (e) {
    console.log(e);
    return json({ text: "", error: e });
  }
};
