import { getMessages, sendMessage, deleteMessages } from "./api";

export const fetchMessages = async () => {
  try {
    return await getMessages();
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};

export const submitMessage = async (input, setMessages, setInput) => {
  if (!input.trim()) return false;
  
  try {
    const newMessage = await sendMessage(input);
    setMessages(prev => [...prev, ...newMessage]);
    setInput("");
    return true;
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Error sending message");
    return false;
  }
};

export const autoScrollToBottom = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

export const clearMessages = async () => {
  try {
    await deleteMessages();
    return true;
  } catch (error) {
    console.error("Error clearing messages:", error);
    return false;
  }
};