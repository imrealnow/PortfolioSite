import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { Message, RawMessage } from "../types/Chat";
import chatHistoryState from "../atoms/chatHistory";
import { FiMessageCircle } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { Role } from "../types/Chat";

interface ChatCompletionProps {
	prompt: string;
	systemMessage?: string;
	className?: string;
	onUpdate?: (text: string) => void;
}

const ChatCompletion = ({ onUpdate }: ChatCompletionProps) => {
	const [text, setText] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const [chatHistory, setChatHistory] = useRecoilState(chatHistoryState);
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const chatRef = useRef<HTMLDivElement>(null);

	const addMessage = (message: Message) => {
		setChatHistory((prevHistory) => {
			const newHistory = prevHistory.clone();
			newHistory.addMessage(message);
			return newHistory;
		});
	};

	const handleSendMessage = () => {
		if (message.trim()) {
			addMessage(new Message(message, Role.User));
			generateText(message).then((response) => {
				if (response) {
					addMessage(new Message(response, Role.Assistant));
					setText("");
				}
			});
			setMessage("");
			inputRef.current?.focus();
		}
	};

	const messageSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && e.shiftKey == false) {
			e.preventDefault();
			return handleSendMessage();
		}
	};

	const scrollChatToBottom = () => {
		chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight);
	};

	const toggleOpen: (current: boolean) => void = (prev) => {
		setIsOpen(!prev);
		if (!prev) {
			setTimeout(() => {
				inputRef.current?.focus();
				scrollChatToBottom();
			}, 50);
		}
	};

	const generateText = async (userMessage: string) => {
		let accumulatedText = "";
		setText("");
		try {
			const rawMessages: RawMessage[] =
				chatHistory.getOpenAIFormattedMessages();
			rawMessages.push({ role: "user", content: userMessage });
			const body = { messages: rawMessages };
			console.log(body);
			const response = await fetch(
				"https://chatgptserver-f1e122a51b2e.herokuapp.com/ChatCompletion",
				{
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to fetch data.");
			}

			if (response.body) {
				const reader = response.body.getReader();
				const textDecoder = new TextDecoder();

				const readData = async (): Promise<string> => {
					const { done, value } = await reader.read();
					if (done) return accumulatedText;

					const decodedChunk = textDecoder.decode(value);
					const jsonLines = decodedChunk.trim().split("\f");
					const jsonChunk = JSON.parse(
						jsonLines[jsonLines.length - 1]
					);
					const content = jsonChunk.content;

					if (content) {
						accumulatedText += content;
						setText((prevText) => prevText + content);
						scrollChatToBottom();
						onUpdate?.(accumulatedText);
					}

					return readData();
				};

				return await readData();
			} else {
				console.error("Response body is not available");
				return null;
			}
		} catch (error) {
			console.error("Error:", error);
			return null;
		}
	};

	return (
		<>
			<div className="fixed bottom-4 right-4 z-50">
				<button
					onClick={() => {
						toggleOpen(isOpen);
					}}
					className="rounded-full bg-blue-500 text-white w-14 h-14 p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
				>
					<FiMessageCircle size={24} />
				</button>
			</div>
			<div className="fixed bottom-20 right-4 origin-bottom-right z-50">
				<div
					className={`${
						isOpen
							? "fade-in-up"
							: "fade-out-down pointer-events-none"
					} flex flex-col justify-start mt-4 p-4 w-60 xs:w-80 h-96 bg-slate-600 border rounded shadow-lg transform transition-transform duration-300 ease-in-out`}
				>
					{isOpen && (
						<>
							<div
								ref={chatRef}
								className="flex-grow overflow-y-auto pr-2 pb-2 scrollbar-thin scrollbar-thumb-slate-700"
							>
								<h1 className="text-2xl font-bold pt-0 pb-2 text-slate-300">
									{chatHistory.chatbotPersonality}
								</h1>
								{chatHistory.messages.map((msg, index) => {
									if (msg.role === Role.System) {
										return null;
									}
									return (
										<div
											key={index}
											className={`p-2 my-2 w-fit max-w-[75%] ${
												msg.role === Role.User
													? "ml-auto user-message"
													: "assistant-message"
											}`}
										>
											{msg.message}
										</div>
									);
								})}

								{/* This is for displaying the real-time message being streamed in */}
								{text && (
									<div className="p-2 my-1 w-3/4 assistant-message">
										{text}
									</div>
								)}
							</div>

							<div className="mt-4 relative">
								<textarea
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									onKeyDown={messageSubmit}
									className="bg-slate-400 text-slate-900 border rounded w-full p-2 overflow-y-auto resize-none pr-12 mr-4 scrollbar-thin scrollbar-thumb-slate-700"
									placeholder="Type your message..."
									rows={2}
									cols={4}
									ref={inputRef}
								/>
								<button
									onClick={handleSendMessage}
									className="absolute flex justify-center items-center bottom-3 right-2 bg-blue-500 text-white rounded p-2 w-8 h-8"
								>
									<FiSend size={20} />{" "}
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default ChatCompletion;
