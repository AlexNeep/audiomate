import { ActionFunction, json } from "@remix-run/node";
import { generateTextFromInput, getTextFromSpeech } from "~/models";
import invariant from "tiny-invariant";

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const audio = formData.get("audio") as Blob;
    const inputText = formData.get("input_text") as string;
    const pastText = (formData.get("past_text") ?? "") as string;

    if (!audio && !inputText) throw Error("Audio or input text required");
    const text = audio ? await getTextFromSpeech(audio) : inputText;
    console.log(text);
    const generatedResText = await generateTextFromInput(pastText, text);
    console.log(generatedResText);
    return json({ text: generatedResText });
  } catch (e) {
    console.log(e);
    return json({ text: "", error: e });
  }
};
