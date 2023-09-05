import { atom } from "recoil";
import { Message, ChatHistoryImpl } from "../types/Chat";
import { Role } from "../types/Chat";
import chatSystemPrompts from "../constants/chatSystemPrompts.json";

// Extract the required messages
const personality = chatSystemPrompts.InitialPrompts[0].personality;
const initialPrompt = chatSystemPrompts.InitialPrompts[0].prompt;
const factsContext = chatSystemPrompts.FactsContext;
const firstAssistantMessage =
	chatSystemPrompts.InitialPrompts[0].firstAssistantMessage;

// Initialize the chatHistoryState atom
const chatHistoryState = atom<ChatHistoryImpl>({
	key: "chatHistoryState",
	default: new ChatHistoryImpl(
		new Message(initialPrompt, Role.System),
		new Message(factsContext, Role.System),
		new Message(firstAssistantMessage, Role.Assistant)
	).setPersonality(personality),
});

export default chatHistoryState;
