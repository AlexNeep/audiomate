import { ActionFunction, json } from "@remix-run/node";

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

    const text = await transcribeAudioDirect(audio);
    console.log({ text });
    if (text === "")
      return json({
        error:
          "We did not detect any words in that audio recording. Make sure your audio device is connected.",
        text,
      });
    if (!text) return json({ error: "Something went wrong", text });

    return json({ text });
  } catch (e) {
    console.log(e);
    return json({ error: "Something went wrong", text: "" });
  }
};

async function transcribeAudioDirect(audio: Blob) {
  const formData = new FormData();

  formData.append("model", "whisper-1");
  formData.append("file", audio, "audio.mp3");
  formData.append("language", "en");
  const response = await fetch(
    "https://api.openai.com/v1/audio/transcriptions",
    {
      body: formData,
      method: "post",
      headers: {
        encType: "multipart/form-data",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  const data = await response.json();
  if (data.text) return data.text;

  console.log(data);
  return;
}
