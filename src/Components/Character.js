import Attributes from "./Attributes";
import './Character.css';

// This component aggregates all lower-level components such as attributes, classes, and skills.
// Each character will render this Character component to display its data.
const Character = ({ character, skills, index }) => {
  return (
    <div className="character-container">
      <h1 className="character-title">Character #{index + 1}</h1>
       {/* Button to delete an individual character */}
       <div className="character-content">
        <Attributes attributes={character.attributes} index={index} />
        
      </div>
    </div>
  );
};

export default Character;
