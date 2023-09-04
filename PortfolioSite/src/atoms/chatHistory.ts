import { atom } from "recoil";
import { Message, ChatHistoryImpl } from "../types/Chat";
import { Role } from "../types/Chat";

const chatHistoryState = atom<ChatHistoryImpl>({
	key: "chatHistoryState",
	default: new ChatHistoryImpl(
		new Message(
			"Hello! I'm a chatbot. I can help you navigate this site.",
			Role.Assistant
		)
	),
});

export default chatHistoryState;
