import { useState, useEffect, useRef } from "react";
import { fetchMessages, submitMessage, autoScrollToBottom, clearMessages } from "../../services/chatService";
import Message from "../messages/Message";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const messageEndRef = useRef(null);

  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await fetchMessages();
      setMessages(fetchedMessages);
    };
    loadMessages();
  }, []);

  useEffect(() => {
    autoScrollToBottom(messageEndRef);
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await submitMessage(input, setMessages, setInput);
    setIsLoading(false);
  };

  const handleClear = async () => {
    try {
      await clearMessages();
      setMessages([]);
    } catch (error) {
      console.error("Error clearing messages:", error);
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <div className="chat">
      {showConfirm && (
        <div className="confirmation-overlay">
          <div className="confirmation-dialog">
            <h4>¿Estás seguro?</h4>
            <p>Esta acción borrará todo el historial del chat y no se puede deshacer.</p>
            <div className="confirmation-buttons">
              <button 
                className="confirm-button"
                onClick={handleClear}
              >
                Sí, limpiar
              </button>
              <button 
                className="cancel-button"
                onClick={() => setShowConfirm(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="chat-header">
        <div className="avatar">P</div>
        <h3>Pocki Assistant</h3>
        <button 
          className="clear-button"
          onClick={() => setShowConfirm(true)}
          disabled={messages.length === 0}
        >
          <span className="trash-icon">🗑️</span> Limpiar chat
        </button>
      </div>
      
      <div className="messages-area">
        {messages.length ? (
          messages.map(message => <Message key={message.id} message={message} />)
        ) : (
          <div className="empty-chat">
            <div>💬</div>
            <p>Envía tu primer mensaje</p>
          </div>
        )}
        <div ref={messageEndRef} />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          disabled={isLoading}
        />
        <button disabled={isLoading || !input.trim()}>
          {isLoading ? <div className="spinner" /> : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default Chat;