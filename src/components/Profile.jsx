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
    navigate('/messages'); 
  };

  return (
    <div className="container">
      {/* Header Banner */}
      <div className="header-banner"></div>

      {/* Profile Header Section */}
      <div className="profile-header">
        <div className="profile-pic">
          <span className="initials">FW</span>
        </div>
        
        <div className="profile-identity">
          <h1 className="profile-name">Fay Wright</h1>
          <div className="profile-username">@FinessedByFay</div>
        </div>

        <div className="profile-details">
          <div className="profile-bio">
            <span className="bio-icon">✂️</span> Hair Stylist<br/>
            <span className="bio-icon">🌟</span> Specialize in Locs
          </div>
          <div className="profile-rating">
            <span className="stars">★★★★★</span>
            <span className="review-count">127 reviews</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="profile-actions">
        <button 
          className={`action-btn ${isFollowing ? 'following' : 'follow'}`}
          onClick={handleFollow}
        >
          {isFollowing ? (
            <>
              <span className="btn-icon">✓</span> Following
            </>
          ) : (
            <>
              <span className="btn-icon">+</span> Follow
            </>
          )}
        </button>
        <button className="action-btn message" onClick={handleMessage}>
          <span className="btn-icon">💬</span> Message
        </button>
        <button className="action-btn more">
          <span className="btn-icon">•••</span>
        </button>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">2.4K</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">892</div>
          <div className="stat-label">Following</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">156</div>
          <div className="stat-label">Posts</div>
        </div>
      </div>

      {/* Profile Meta */}
      <div className="profile-meta">
        <div className="meta-item">
          <span className="meta-icon">🔗</span>
          <span className="meta-text">instagram.com/finessedbyfay</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">📍</span>
          <span className="meta-text">Brooklyn, NY</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">📅</span>
          <span className="meta-text">Styling Since 2019</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="nav-tabs">
        <button 
          className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => switchTab('gallery')}
        >
          <span className="tab-icon">🖼️</span>
          <span className="tab-text">Gallery</span>
        </button>
        <button 
          className={`tab ${activeTab === 'prices' ? 'active' : ''}`}
          onClick={() => switchTab('prices')}
        >
          <span className="tab-icon">💰</span>
          <span className="tab-text">Pricing</span>
        </button>
        <button 
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => switchTab('about')}
        >
          <span className="tab-icon">ℹ️</span>
          <span className="tab-text">About</span>
        </button>
      </nav>

      {/* Content Area */}
      <main className="content">
        {/* GALLERY TAB */}
        {activeTab === 'gallery' && (
          <div className="gallery-grid">
            {Array.from({ length: 9 }).map((_, i) => (
              <div className="gallery-item" key={i}>
                <div className="gallery-overlay">
                  <div className="overlay-stats">
                    <span className="stat">❤️ {(i + 1) * 143}</span>
                    <span className="stat">💬 {Math.floor(i * 12)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PRICING TAB */}
        {activeTab === 'prices' && (
          <div className="pricing-section">
            <h2 className="section-title">Services & Rates</h2>
            <div className="pricing-grid">
              <div className="price-card">
                <div className="service-name">Starter Locs</div>
                <div className="service-price">$150</div>
                <div className="service-duration">3-4 hours</div>
              </div>
              <div className="price-card">
                <div className="service-name">Loc Retwist</div>
                <div className="service-price">$85</div>
                <div className="service-duration">1.5-2 hours</div>
              </div>
              <div className="price-card">
                <div className="service-name">Deep Condition</div>
                <div className="service-price">$25</div>
                <div className="service-duration">30 mins</div>
              </div>
              <div className="price-card">
                <div className="service-name">Loc Extensions</div>
                <div className="service-price">$200</div>
                <div className="service-duration">4-5 hours</div>
              </div>
              <div className="price-card">
                <div className="service-name">Color Treatment</div>
                <div className="service-price">$120</div>
                <div className="service-duration">2-3 hours</div>
              </div>
              <div className="price-card">
                <div className="service-name">Consultation</div>
                <div className="service-price">Free</div>
                <div className="service-duration">15 mins</div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="about-section">
            <h2 className="section-title">About Fay</h2>
            <div className="about-content">
              <p className="about-text">
                I've been styling locs in the tri-state area since 2019, building a community of clients who trust me with their hair journey. My focus is on hair health, clean parting, and helping each person express their unique style.
              </p>
              <p className="about-text">
                Whether you're starting your loc journey or maintaining mature locs, I create a comfortable, professional environment where your hair goals become reality.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <span className="highlight-text">Certified Natural Hair Specialist</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💚</span>
                  <span className="highlight-text">Eco-Friendly Products</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⏰</span>
                  <span className="highlight-text">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}