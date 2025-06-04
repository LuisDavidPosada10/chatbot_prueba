import "./Message.css";

export default function Message({ message }) {
  const isUser = message.sender === "user";
  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      <div className="bubble">{message.content}</div>
    </div>
  );
}