import "./style.css";

const ProfileCardComponent = (props) => {
  console.log(props.profileData);
  const {
    avatar_url,
    name,
    location,
    company,
    public_repos,
    following,
    followers,
  } = props.profileData;
  return (
    <div className="profile-card-container">
      <img
        className="person-img"
        src={avatar_url}
        alt={`${name}-profile-pic`}
      />
      <h2 id="person-name">{name}</h2>
      {location && (
        <span className="location-container">
          <img
            id="location-icon"
            src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png"
          />
          <p id="location-text">{location}</p>
        </span>
      )}
      {company && <p id="company-text">Company: {company}</p>}
      <span className="repo-follower-container">
        <div className="public-repo-container">
          <p>{public_repos}</p>
          <p>Public Repositories</p>
        </div>
        <div className="following-container">
          <p>{following}</p>
          <p>Following</p>
        </div>
        <div className="followers-container">
          <p>{followers}</p>
          <p>Followers</p>
        </div>
      </span>
    </div>
  );
};

export default ProfileCardComponent;
