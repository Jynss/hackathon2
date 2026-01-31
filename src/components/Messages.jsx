import { useState } from 'react';
import './style.css';

function Messages() {
  const [conversations] = useState([]);

  return (
    <body>
      <div className="messages-container">
        <header className="messages-header">
          <h1>Messages</h1>
        </header>

        <div className="messages-content">
          <div className="conversations-list">
            {conversations.length === 0 ? (
              <p className="no-messages">No conversations yet</p>
            ) : (
              conversations.map((conv, index) => (
                <div key={index} className="conversation-item">
                  <div className="conversation-avatar">👤</div>
                  <div className="conversation-info">
                    <h3>{conv.name}</h3>
                    <p>{conv.lastMessage}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="message-view">
            <p className="select-message">Select a conversation to start messaging</p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Messages;
