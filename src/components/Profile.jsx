// import { useState } from 'react';
// import './style.css';

// function Profile() {
//   const [profile] = useState({
//     name: 'John Doe',
//     username: '@johndoe',
//     bio: 'Fashion enthusiast and style guru',
//     reviews: '5 reviews',
//     followers: 245,
//     following: 128,
//     posts: 42
//   });

//   return (
//     <body>
//       <div className="container">
//         <header className="header"></header>

//         <div className="profile-section">
//           <div className="profile-pic">👤</div>
//           <div className="profile-info">
//             <h1 className="profile-name">{profile.name}</h1>
//             <p className="profile-username">{profile.username}</p>
//             <p className="profile-bio">{profile.bio}</p>
//             <p className="profile-reviews">{profile.reviews}</p>

//             <div className="profile-stats">
//               <div className="stat">
//                 <span className="stat-number">{profile.posts}</span>
//                 <span className="stat-label">Posts</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">{profile.followers}</span>
//                 <span className="stat-label">Followers</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">{profile.following}</span>
//                 <span className="stat-label">Following</span>
//               </div>
//             </div>

//             <div className="profile-actions">
//               <button className="btn-primary">Follow</button>
//               <button className="btn-secondary">Message</button>
//             </div>
//           </div>
//         </div>

//         <section className="profile-posts">
//           <h2>Posts</h2>
//           <div className="posts-grid">
//             {/* Posts would be rendered here */}
//             <p>No posts yet</p>
//           </div>
//         </section>
//       </div>
//     </body>
//   );
// }

// export default Profile;

import React, { useState } from "react";

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("gallery");

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  const handleMessage = () => {
    alert("Message feature coming soon!");
  };

  const switchTab = (tabName) => {
    setActiveTab(tabName);
    console.log("Switched to:", tabName);
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: #f0f2f5;
          color: #1c1e21;
        }

        .container {
          max-width: 935px;
          margin: 0 auto;
          background: white;
        }

        .header {
          position: relative;
        }

        .profile-section {
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 30px;
          margin-top: -80px;
          position: relative;
        }

        .profile-pic {
          width: 150px;
          height: 150px;
          margin-top: 80px;
          border-radius: 20%;
          border: 5px solid white;
          background: linear-gradient(135deg, #ff8400 0%, #003884 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .profile-info {
          flex: 1;
          padding-top: 80px;
        }

        .profile-name {
          font-size: 25px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .profile-username {
          color: #65676b;
          font-size: 17px;
          margin-bottom: 15px;
        }

        .profile-bio,
        .profile-reviews {
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        .btn {
          padding: 8px 20px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-primary {
          background: #1877f2;
          color: white;
        }

        .btn-secondary {
          background: #e4e6eb;
          color: #1c1e21;
        }

        .profile-meta {
          display: flex;
          gap: 20px;
          font-size: 14px;
          color: #65676b;
        }

        .tabs {
          border-top: 1px solid #e4e6eb;
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 0 20px;
        }

        .tab {
          padding: 15px 0;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          font-weight: 600;
          color: #65676b;
        }

        .tab.active {
          border-bottom-color: #1877f2;
          color: #1877f2;
        }

        .content {
          padding: 20px;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
        }

        .post {
          aspect-ratio: 1;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          cursor: pointer;
        }

        .post-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          color: white;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .post:hover .post-overlay {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .profile-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-top: -60px;
          }

          .profile-pic {
            width: 120px;
            height: 120px;
          }

          .profile-info {
            padding-top: 20px;
          }

          .posts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="container">
        <div className="header" />

        <div className="profile-section">
          <div className="profile-pic">FW</div>

          <div className="profile-info">
            <h1 className="profile-name">Fay Wright</h1>
            <div className="profile-username">@FinessedByFay</div>

            <div className="profile-bio">
              Hair Stylist <br />
              Specializes in Locs
            </div>

            <div className="profile-reviews">⭐ 4.9 (1.5k)</div>

            <div className="action-buttons">
              <button
                className={`btn ${isFollowing ? "btn-secondary" : "btn-primary"}`}
                onClick={handleFollow}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>

              <button className="btn btn-secondary" onClick={handleMessage}>
                Message
              </button>
            </div>

            <div className="profile-meta">
              <div>🔗 instagram.com</div>
              <div>📅 Styling Since 2019</div>
            </div>
          </div>
        </div>

        <div className="tabs">
          <div
            className={`tab ${activeTab === "gallery" ? "active" : ""}`}
            onClick={() => switchTab("gallery")}
          >
            Gallery
          </div>
          <div
            className={`tab ${activeTab === "prices" ? "active" : ""}`}
            onClick={() => switchTab("prices")}
          >
            Pricing
          </div>
          <div
            className={`tab ${activeTab === "about" ? "active" : ""}`}
            onClick={() => switchTab("about")}
          >
            About
          </div>
        </div>

        <div className="content">
          <div className="posts-grid">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="post">
                <div className="post-overlay">
                  <span>❤️ {Math.floor(Math.random() * 2000)}</span>
                  <span>💬 {Math.floor(Math.random() * 100)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
