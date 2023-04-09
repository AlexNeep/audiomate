import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

export async function getTextFromSpeech(audio: Blob) {
  enum Errors {
    DEFAULT = "Something went wrong",
    NO_TEXT = "We did not detect any words in that audio recording. Make sure your audio device is connected.",
  }
  try {
    const text = await transcribeAudioDirect(audio);

    if (text === "") throw Error(Errors.NO_TEXT);

    if (!text) throw Error(Errors.DEFAULT);

    return text;
  } catch (e) {
    console.log(e);
    throw Error(Errors.DEFAULT);
  }
}

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

export async function generateTextFromInput(
  pastText: string,
  newUserInput: string
) {
  enum Errors {
    DEFAULT = "Something went wrong",
  }
  const config = {
    model: "gpt-3.5-turbo",
    max_tokens: 1000,
    frequency_penalty: 0.2,
    presence_penalty: 1,
    temperature: 0.6,
    top_p: 1,
  };

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const messages: ChatCompletionRequestMessage[] = [
    {
      role: "system",
      content:
        "Process the user message and respond. The content the user is referring to is in the next message. They may be requesting edits to the original text.",
    },
    {
      role: "user",
      content: `Past content: ${pastText}`,
    },
    {
      role: "user",
      content: `New user input: ${newUserInput}`,
    },
  ];
  try {
    const openAiRequest = openai.createChatCompletion({
      messages,
      ...config,
    });
    const res = (await Promise.race([
      openAiRequest,
      new Promise((_, reject) => setTimeout(() => reject(), 15000)),
    ])) as any;
    const responseText = res?.data?.choices?.[0].message?.content;
    return responseText;
  } catch (e) {
    console.log(e);
    return Errors.DEFAULT;
  }
}
