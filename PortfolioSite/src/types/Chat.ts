enum Role {
	System,
	User,
	Assistant,
}

interface ChatMessage {
	message: string;
	role: Role;
	date?: Date;
}

interface RawMessage {
	role: string;
	content: string;
}

interface ChatHistory {
	messages: ChatMessage[];
}

class Message implements ChatMessage {
	public message: string;
	public role: Role;
	public date?: Date;

	public constructor(message: string, role: Role, date?: Date) {
		this.message = message;
		this.role = role;
		this.date = date;
	}
}

class ChatHistoryImpl implements ChatHistory {
	public messages: ChatMessage[] = [];
	public chatbotPersonality: string = "";
	constructor(...messages: ChatMessage[]) {
		this.messages = messages;
	}

	public clone: () => ChatHistoryImpl = () => {
		const clone = new ChatHistoryImpl();
		clone.messages = [...this.messages];
		return clone;
	};

	public setPersonality(personality: string): ChatHistoryImpl {
		this.chatbotPersonality = personality;
		return this;
	}

	public addMessage(message: ChatMessage) {
		this.messages.push(message);
	}

	public addMessages(...messages: ChatMessage[]) {
		this.messages.push(...messages);
	}

	public clearMessages() {
		this.messages = [];
	}

	public getMessages() {
		return this.messages;
	}

	public getOpenAIFormattedMessages(): RawMessage[] {
		// messages: [{"role": "user", "content": "Hello!"}],
		const messages = this.messages.map((message) => {
			return {
				role: Role[message.role].toLowerCase(),
				content: message.message,
			};
		});
		return messages;
	}
}

export { Role, Message, ChatHistoryImpl };
export type { ChatHistory, ChatMessage, RawMessage };
