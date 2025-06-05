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
    setMessages((prev) => [...prev, ...newMessage]);
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

export const clearMessages = async (setMessages) => {
  try {
    const response = await deleteMessages();
    if (response && response.success) {
      setMessages([]);
      return true;
    }
    throw new Error(response?.message || 'Failed to clear messages');
  } catch (error) {
    console.error("Clear error:", error.response?.data || error.message);
    return false;
  }
};