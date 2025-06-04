import './App.css';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Chat with Pocki</h1>
      </header>
      <div className="chat-wrapper">
        <Chat />
      </div>
    </div>
  );
}

export default App;