import { useContext } from "react";
import { CharContext } from "../App";
import { attributeModifierPoints } from "../HelperFunctions/HelperMethode";
import './Skills.css';

// This component handles the skills for each character, including displaying and updating skill points.
const Skills = ({ attributes, skills, skillOptions, index }) => {
  // Calculate modifier points for each attribute
  const modifierPoints = Object.entries(attributes).reduce(
    (acc, [attribute, points]) => {
      acc[attribute] = attributeModifierPoints(points);
      return acc;
    },
    {}
  );

  // Context action for updating app state
  const skillDispatch = useContext(CharContext);

  // Calculate total skill points based on Intelligence modifier
  const totalSkillPoints = Math.max(10 + 4 * modifierPoints["Intelligence"], 0);

  // Calculate the amount of skill points spent
  const skillPointsSpent = Object.values(skills).reduce(
    (total, points) => total + points,
    0
  );

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <h4>{`Total skill points available: ${totalSkillPoints - skillPointsSpent}`}</h4>
      <h4>{`Total skill points spent: ${skillPointsSpent}`}</h4>

      {skillOptions.map((skill) => (
        <div key={skill.name} className="attribute">
          <span>
            {`${skill.name}: ${skills[skill.name]} (Mod: ${skill.attributeModifier}: ${modifierPoints[skill.attributeModifier]})`}

            <span>
              {/* Button to increment skill points */}
              {skillPointsSpent < totalSkillPoints && (
                <button
                  className="increment-button"
                  onClick={() =>
                    skillDispatch({
                      type: "SKILL_INCREMENT",
                      payload: {
                        skill: skill.name,
                        index,
                      },
                    })
                  }
                >
                  +
                </button>
              )}
              {/* Button to decrement skill points */}
              {skills[skill.name] > 0 && (
                <button
                  className="decrement-button"
                  onClick={() =>
                    skillDispatch({
                      type: "SKILL_DECREMENT",
                      payload: {
                        skill: skill.name,
                        index,
                      },
                    })
                  }
                >
                  -
                </button>
              )}
            </span>
            {` total: ${skills[skill.name] + modifierPoints[skill.attributeModifier]}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
