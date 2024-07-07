
import PropTypes from 'prop-types';
import './Player.css'; // Import the custom CSS

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="player-card">
      <div className="player-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="player-info">
        <h2><strong>{name}</strong></h2>
        <p><strong>Equipe:</strong> {team}</p>
        <p><strong>Nationalité:</strong> {nationality}</p>
        <p><strong>Numéro:</strong> {jerseyNumber}</p>
        <p><strong>Âge:</strong> {age}</p>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Player;
