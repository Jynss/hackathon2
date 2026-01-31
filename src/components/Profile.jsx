import React, { useState } from 'react'
import './style.css'

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState('gallery')

  function handleFollow() {
    setIsFollowing((p) => !p)
  }

  function handleMessage() {
    alert('Message feature coming soon!')
  }

  function switchTab(tabName) {
    setActiveTab(tabName)
  }

  return (
    <div className="container">
      <div className="header"></div>

      <div className="profile-section">
        <div className="profile-pic">FW</div>
        <div className="profile-info">
          <h1 className="profile-name">Fay Wright</h1>
          <div className="profile-username">@FinessedByFay</div>
          <div className="profile-bio">Hair Stylist <br/> Specialize in Locs</div>
          <div className="profile-reviews">&#11088; &#10030;</div>

          <div className="profile-stats"></div>

          <div className="action-buttons">
            <button className="btn btn-primary" onClick={handleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
            <button className="btn btn-secondary" onClick={handleMessage}>Message</button>
          </div>

          <div className="profile-meta">
            <div className="meta-item"><span>🔗</span><span>instagram.com</span></div>
            <div className="meta-item"><span>📅</span><span>Styling Since 2019</span></div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <div className={`tab ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => switchTab('gallery')}>Gallery</div>
        <div className={`tab ${activeTab === 'prices' ? 'active' : ''}`} onClick={() => switchTab('prices')}>Pricing</div>
        <div className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => switchTab('about')}>About</div>
      </div>

      <div className="content">
        <div className="posts-grid">
          {Array.from({length:9}).map((_,i) => (
            <div className="post" key={i}>
              <div className="post-overlay"><span>❤️ {(i+1)*100}</span><span>💬 {Math.floor(i*3)}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
