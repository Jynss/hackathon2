import React, { useState } from 'react'
import './style.css'

export default function Messages(){
  // Sample contacts data (people and businesses you follow)
  const [contacts] = useState([
    { id: 1, name: 'JB Cuts', type: 'hair', avatar: '✂', lastMessage: 'Thanks for scheduling your appointment' },

  ])

  const [selectedContact, setSelectedContact] = useState(null)
  const [messages, setMessages] = useState({})
  const [newMessage, setNewMessage] = useState('')

  const handleSelectContact = (contact) => {
    setSelectedContact(contact)
    // Initialize messages for this contact if none exist
    if (!messages[contact.id]) {
      setMessages(prev => ({
        ...prev,
        [contact.id]: [
          { id: 1, text: contact.lastMessage, sender: 'them', time: '10:30 AM' }
        ]
      }))
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !selectedContact) return

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), newMsg]
    }))
    setNewMessage('')
  }

  return (
    <div className="messages-container">
      {/* Left Sidebar - Contacts List */}
      <div className="contacts-sidebar">
        <div className="contacts-header">
          <h2>Chats</h2>
        </div>
        <div className="contacts-list">
          {contacts.map(contact => (
            <div
              key={contact.id}
              className={`contact-item ${selectedContact?.id === contact.id ? 'active' : ''}`}
              onClick={() => handleSelectContact(contact)}
            >
              <div className="contact-avatar">
                {contact.avatar}
              </div>
              <div className="contact-info">
                <div className="contact-name">
                  {contact.name}
                  {contact.type === 'business' && <span className="business-badge">Business</span>}
                </div>
                <div className="contact-preview">{contact.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Chat Area */}
      <div className="chat-area">
        {selectedContact ? (
          <>
            <div className="chat-header">
              <div className="chat-header-avatar">{selectedContact.avatar}</div>
              <div className="chat-header-info">
                <div className="chat-header-name">{selectedContact.name}</div>
                <div className="chat-header-status">Online</div>
              </div>
            </div>
            <div className="chat-messages">
              {(messages[selectedContact.id] || []).map(msg => (
                <div key={msg.id} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                  <div className="message-content">
                    <p>{msg.text}</p>
                    <span className="message-time">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <form className="chat-input-area" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="chat-input"
              />
              <button type="submit" className="send-button">Send</button>
            </form>
          </>
        ) : (
          <div className="no-chat-selected">
            <div className="no-chat-icon">💬</div>
            <h3>Select a conversation</h3>
            <p>Choose a person or business from the left to start chatting</p>
          </div>
        )}
      </div>
    </div> 
  )
}
