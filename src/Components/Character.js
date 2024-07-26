import Attributes from "./Attributes";
import ClassOptions from "./ClassOptions"; // Import the ClassOptions component
import "./Character.css";
import { CLASS_LIST, SKILL_LIST } from "../API/constants";
import Skills from "./Skills";
import DeleteCharacterButton from "./DeleteCharacterButton"; // Import the DeleteCharacterButton component
import SkillCheck from "./SkillCheck"; // Import the SkillCheck component

// This component aggregates all lower-level components such as attributes, classes, and skills.
// Each character will render this Character component to display its data.
const Character = ({ character, skills, index }) => {
  return (
    <div className="character-container">
      <h1 className="character-title">Character #{index + 1}</h1>
      <SkillCheck character={character} />
      <DeleteCharacterButton index={index} />
      <div className="character-content">
        <Attributes attributes={character.attributes} index={index} />
        <ClassOptions
          classOptions={CLASS_LIST}
          attributes={character.attributes}
        />
        <Skills
          skillOptions={SKILL_LIST}
          skills={skills}
          attributes={character.attributes}
          index={index}
        />
      </div>
    </div>
  );
};

export default Character;
