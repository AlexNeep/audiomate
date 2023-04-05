// // You are a nlp program. You should process the provided German word and output exactly this json

// import { Configuration, OpenAIApi } from "openai";
// import { getLanguageName } from "~/utils";
// import { LanguageCode } from "~/utils/languages";
// import { WordDefinition } from "~/utils/types";

// export async function getWordDefinition(
//   word: string,
//   targetLanguageCode: LanguageCode,
//   baseLanguageCode: LanguageCode
// ): Promise<{
//   processed_word?: WordDefinition;
//   error?: string;
// }> {
//   let jsonString;
//   try {
//     const config = {
//       model: "gpt-3.5-turbo",
//       max_tokens: 200,
//       frequency_penalty: 0.2,
//       presence_penalty: 1,
//       temperature: 0.6,
//       top_p: 1,
//     };

//     const configuration = new Configuration({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const openai = new OpenAIApi(configuration);
//     const targetLanguageName = getLanguageName(targetLanguageCode);
//     const baseLanguageName = getLanguageName(baseLanguageCode);
//     const systemMessage = `You are a nlp program. You should process the provided ${targetLanguageName} word and output exactly this json: {
//     "lemma":string,//lemma
//     "word_with_gender":string,//null if not applicable
//     "translation":string,//always in ${baseLanguageName}
//     "definition": string, // always in ${baseLanguageName}
//     "example_sentence":string,
//     "word_type":string,//noun,verb,etc
//     }`;

//     const res = await openai.createChatCompletion({
//       messages: [
//         {
//           role: "system",
//           content: systemMessage,
//         },
//         {
//           role: "user",
//           content: `Word: ${word}`,
//         },
//       ],
//       ...config,
//     });

//     jsonString = res?.data?.choices?.[0].message?.content;
//     if (!jsonString) throw new Error("No json string returned");
//     const json = JSON.parse(jsonString);

//     return { processed_word: json };
//   } catch (e) {
//     console.log(jsonString);
//     return {
//       error: "Something went wrong",
//     };
//   }
// }

// export async function getVariations(
//   word: string,
//   targetLanguageCode: LanguageCode
// ): Promise<{
//   processed_word?: { inflections: string[] };
//   error?: string;
// }> {
//   let jsonString;
//   try {
//     const config = {
//       model: "gpt-4",
//       max_tokens: 200,
//       frequency_penalty: 0.2,
//       presence_penalty: 1,
//       temperature: 0.6,
//       top_p: 1,
//     };

//     const configuration = new Configuration({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const openai = new OpenAIApi(configuration);
//     const targetLanguageName = getLanguageName(targetLanguageCode);
//     const systemMessage = `You are a nlp program. You should provide all the inflections for the provided ${targetLanguageName} word Including the provided word if it is an inflection as well. Output exactly this json: {
//       "inflections": string[]
//     }`;

//     const res = await openai.createChatCompletion({
//       messages: [
//         {
//           role: "system",
//           content: systemMessage,
//         },
//         {
//           role: "user",
//           content: `Word: ${word}`,
//         },
//       ],
//       ...config,
//     });

//     jsonString = res?.data?.choices?.[0].message?.content;
//     if (!jsonString) throw new Error("No json string returned");
//     const json = JSON.parse(jsonString);

//     return { processed_word: json };
//   } catch (e) {
//     console.log(jsonString);
//     return {
//       error: "Something went wrong",
//     };
//   }
// }
