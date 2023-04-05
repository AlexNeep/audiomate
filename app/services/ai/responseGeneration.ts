// import {
//   getMessages,
//   getMostRecentPastPrompts,
//   responsePrefix,
//   responseTokenLimit,
// } from "~/utils/prompt";

// import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
// import { Input, SelectedScenarioDescription } from "~/utils/types";
// import { getLanguageName } from "~/utils";
// import { LanguageCode } from "~/utils/languages";
// import {
//   LessonStepProgress,
//   Level,
//   NewLessonProgress,
// } from "~/routes/lessons/$lessonId";

// async function getSentence(messages: ChatCompletionRequestMessage[]) {
//   const config = {
//     model: "gpt-3.5-turbo",
//     max_tokens: responseTokenLimit,
//     frequency_penalty: 0.2,
//     presence_penalty: 1,
//     temperature: 0.6,
//     top_p: 1,
//   };

//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const openai = new OpenAIApi(configuration);
//   try {
//     const openAiRequest = openai.createChatCompletion({
//       messages,
//       ...config,
//     });
//     const res = (await Promise.race([
//       openAiRequest,
//       new Promise((_, reject) => setTimeout(() => reject(), 15000)),
//     ])) as any;

//     const sentenceResponse = res?.data?.choices?.[0].message?.content;
//     const usedTokens = res?.data?.usage?.total_tokens;

//     if (!sentenceResponse || !usedTokens) {
//       console.log({
//         error: "Error generating new prompt",
//         sentenceResponse,
//         usedTokens,
//       });
//       return {
//         error: "Something went wrong",
//         response: "",
//         total_tokens: usedTokens ?? 0,
//       };
//     }

//     return { response: sentenceResponse, total_tokens: usedTokens };
//   } catch (e) {
//     return {
//       error: "Something went wrong",
//       response: "",
//       total_tokens: 0,
//     };
//   }
// }

// export function getGuidedAiNextSentence(
//   completed: number,
//   description: SelectedScenarioDescription[],
//   userPrompt: string,
//   backgroundPrompt: string,
//   pastPrompts: Input[],
//   targetLanguageName: string,
//   hasAnsweredPreviousQuestion: boolean
// ): Promise<{ response: string; total_tokens: number; error?: string }> {
//   const messages = getMessages(
//     completed,
//     description,
//     userPrompt,
//     pastPrompts,
//     backgroundPrompt,
//     targetLanguageName,
//     hasAnsweredPreviousQuestion
//   );

//   return getSentence(messages);
// }

// export function getFreeRoamSentence(
//   userPrompt: string,
//   backgroundPrompt: string,
//   pastPrompts: Input[],
//   targetLanguageName: string
// ): Promise<{ response: string; total_tokens: number; error?: string }> {
//   const messages = getFreeRoamMessages(
//     userPrompt,
//     backgroundPrompt,
//     pastPrompts,
//     targetLanguageName
//   );

//   return getSentence(messages);
// }

// function getFreeRoamMessages(
//   userPrompt: string,
//   backgroundPrompt: string,
//   pastPrompts: Input[],
//   targetLanguageName: string
// ) {
//   let messages = [];
//   const mostRecentPastPrompts = getMostRecentPastPrompts(pastPrompts);

//   messages.push({
//     role: "system",
//     content: `Situation:${backgroundPrompt}. Only write messages in ${targetLanguageName}.\n`,
//   } as ChatCompletionRequestMessage);

//   mostRecentPastPrompts.forEach(({ prompt, response }) => {
//     messages.push({
//       role: "user",
//       content: prompt,
//     } as ChatCompletionRequestMessage);

//     messages.push({
//       role: "assistant",
//       content: response?.text,
//     } as ChatCompletionRequestMessage);
//   });

//   messages.push({
//     role: "user",
//     content: `${userPrompt}\n${responsePrefix}`,
//   } as ChatCompletionRequestMessage);

//   return messages;
// }

// export function getLessonSentence(
//   userPrompt: string,
//   targetLanguageCode: LanguageCode,
//   systemPrompt: string,
//   inputs: Input[]
// ): Promise<{ response: string; total_tokens: number; error?: string }> {
//   const messages = getLessonStepMessages(
//     userPrompt,
//     systemPrompt,
//     inputs,
//     targetLanguageCode
//   );

//   return getSentence(messages);
// }

// function getLessonStepMessages(
//   userPrompt: string,
//   backgroundPrompt: string,
//   inputs: Input[],
//   targetLanguageCode: LanguageCode
// ) {
//   let messages = [];
//   const mostRecentPastPrompts = getMostRecentPastPrompts(inputs);
//   const targetLanguageName = getLanguageName(targetLanguageCode);

//   const levelEnding = `. Speak in simple and short ${targetLanguageName} sentences. Important: keep your response under 2 sentences`;

//   messages.push({
//     role: "system",
//     content: `Situation:${backgroundPrompt}. Only write messages in ${targetLanguageName}${levelEnding}`,
//   } as ChatCompletionRequestMessage);

//   mostRecentPastPrompts.forEach(({ prompt, response }) => {
//     messages.push({
//       role: "user",
//       content: prompt,
//     } as ChatCompletionRequestMessage);

//     messages.push({
//       role: "assistant",
//       content: response?.text,
//     } as ChatCompletionRequestMessage);
//   });

//   messages.push({
//     role: "user",
//     content: userPrompt,
//   } as ChatCompletionRequestMessage);

//   return messages;
// }

// export async function getAnsweredQuestion(
//   prompt: string,
//   question: string,
//   keyPhrase: string,
//   ai_help?: string
// ) {
//   const config = {
//     model: "gpt-3.5-turbo",
//     max_tokens: 10,
//     frequency_penalty: 0.2,
//     presence_penalty: 1,
//     temperature: 0.6,
//     top_p: 1,
//   };

//   if (ai_help === "any") {
//     return { hasAnsweredPreviousQuestion: true, total_tokens: 0 };
//   }

//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const openai = new OpenAIApi(configuration);

//   const messages: ChatCompletionRequestMessage[] = [
//     {
//       role: "system",
//       content: getSystemPrompt(ai_help),
//     },
//     { role: "user", content: `Question: ${question}` },
//     { role: "user", content: `Key phrase: ${keyPhrase}` },
//     { role: "user", content: `Sentence: ${prompt}` },
//     { role: "user", content: `yes or no: ` },
//   ];

//   const res = await openai.createChatCompletion({
//     messages,
//     ...config,
//   });

//   const sentence = res?.data?.choices?.[0].message?.content;

//   const usedTokens = res?.data?.usage?.total_tokens;

//   if (!sentence || !usedTokens) {
//     console.log({
//       error: "Error evaluating if they answered question",
//       sentence,
//       usedTokens,
//     });

//     return {
//       error: "Something went wrong",
//       hasAnsweredPreviousQuestion: false,
//       total_tokens: usedTokens ?? 0,
//     };
//   }

//   const answer = sentence.toLowerCase().trim();
//   const hasAnsweredPreviousQuestion = answer.includes("yes");

//   return { hasAnsweredPreviousQuestion, total_tokens: usedTokens };
// }

// function getSystemPrompt(ai_help?: string) {
//   const basePrompt =
//     "Does the sentence mention the key phrase in relation to the question asked? Ignore any language differences. Ignore any slight grammatical mistakes. The sentence does not have to be complete. Answer with yes or no";

//   if (ai_help) return `${basePrompt}. ${ai_help}`;

//   return basePrompt;
// }
