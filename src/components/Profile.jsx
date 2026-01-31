import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState('gallery')

  function handleFollow() {
    setIsFollowing((p) => !p)
  }

  function switchTab(tabName) {
    setActiveTab(tabName)
  }

  const navigate = useNavigate();

  const handleMessage = () => {
  // This changes the URL and tells React Router to render Messages.jsx
  navigate('/messages'); 

    // fix when we get back
  const handleBooking = () => {
  // This changes the URL and tells React Router to render Messages.jsx
  navigate('/booking');
};

  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-pic">FW</div>
        <div className="profile-info">
          <h1 className="profile-name">Fay Wright</h1>
          <div className="profile-username">@FinessedByFay</div>
          <div className="profile-bio">Hair Stylist <br/> Specialize in Locs</div>
          <div className="profile-reviews">&#11088; 4.6 (1.2k) </div>

          <div className="profile-stats"></div>

          <div className="action-buttons">
            {/* changes follow button to following and from blue(primary) to grey(secondary) */}
            <button className={`btn ${isFollowing ? 'btn-secondary' : 'btn-primary'}`} 
            onClick={handleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
            <button className="btn btn-secondary" onClick={handleBooking}
            >
              Book 📅
            </button>
            <button className="btn btn-secondary" onClick={handleMessage}
            >
              Message
            </button> 
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
          {/* GALLERY TAB */}
          {activeTab === 'gallery' && (
            <div className="posts-grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <div className="post" key={i}>
                  <div className="post-overlay">
                    <span>❤️ {(i + 1) * 100}</span>
                    <span>💬 {Math.floor(i * 3)}</span>
                  </div>
                </div>
              ))}
            </div>
            )}

          {/* PRICING TAB */}
          {activeTab === 'prices' && (
            <div className="pricing-list">
              <h3>Services & Rates</h3>
              <ul>
                <li>Starter Locs - $150</li>
                <li>Loc Retwist - $85</li>
                  <li>Deep Condition - $25</li>
              </ul>
            </div>
          )}

          {/* ABOUT TAB */}
          {activeTab === 'about' && (
            <div className="about-section">
              <h3>About Fay</h3>
              <p>I've been styling locs in the tri-state area since 2019. My focus is on hair health and clean parting.</p>
            </div>
          )}
        </div>


            </div>
          )
        }
