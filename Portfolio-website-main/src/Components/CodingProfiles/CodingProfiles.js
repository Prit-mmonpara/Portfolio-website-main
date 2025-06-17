import React from 'react';
import './CodingProfiles.css';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/prit_12/",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      color: "#FFA116"
    },
    {
      name: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/pritmonpara1204",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
      color: "#2F8D46"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/movieplus1231",
      image: "https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg",
      color: "#743C1B"
    },
    {
      name: "Coding Ninjas",
      url: "https://www.codingninjas.com/studio/profile/36328db8-b9cd-4f09-ad05-15ca05de307c",
      image: "https://www.svgrepo.com/show/330198/codingninjas.svg",
      color: "#FF5C00"
    },
    {
      name: "CodeForces",
      url: "https://codeforces.com/profile/pritmonpara1204",
      image: "https://play-lh.googleusercontent.com/EkSlLWf2-04k5Y5F_MDLqoXPdo0TyZX3zKdCfsEUDqVB7INUypTOd6AVmkE_X7ej3JuR",
      color: "#3B5998"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/devlopment",
      image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png",
      color: "#00EA64"
    }
  ];

  return (
    <div className="coding-profiles-section" id="about">
      <div className="profiles-header">
        <h1>My <span>Coding Profiles</span></h1>
        <p>Check out my profiles on these competitive programming platforms</p>
      </div>
      
      <div className="profiles-scroll-container">
        <div className="profiles-container">
          {profiles.map((profile, index) => (
            <a 
              className="profile-card" 
              href={profile.url} 
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--profile-color': profile.color }}
            >
              <div className="profile-image-container">
                <img 
                  className="profile-image" 
                  src={profile.image} 
                  alt={profile.name} 
                />
              </div>
              <div className="profile-name">{profile.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;