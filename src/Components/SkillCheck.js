import { SKILL_LIST } from "../API/constants";
import { useState } from "react";
import { attributeModifierPoints } from "../HelperFunctions/HelperMethode";
import "./SkillCheck.css";

const SkillCheck = ({ character }) => {
  const [selectedSkill, setSelectedSkill] = useState(SKILL_LIST[0].name);
  const [dc, setDC] = useState(0);
  const [skillCheckResults, setSkillCheckResults] = useState({});

  const performSkillCheck = () => {
    const skillPoints = character.skills[selectedSkill];
    const attributeModifier = SKILL_LIST.find(
      (skill) => skill.name === selectedSkill
    ).attributeModifier;
    const modifierPoints = attributeModifierPoints(
      character.attributes[attributeModifier]
    );
    const roll = Math.floor(Math.random() * 20) + 1;
    const totalPoints = skillPoints + modifierPoints;
    const passed = totalPoints + roll >= dc;

    setSkillCheckResults({
      skill: selectedSkill,
      totalPoints,
      dc,
      roll,
      passed,
    });
  };

  return (
    <div className="skill-check-container">
      <h2>Skill Check</h2>
      <div className="skill-check-controls">
        <div className="skill-dev">
          <label>Skill: </label>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            {SKILL_LIST.map((skill) => (
              <option key={skill.name} value={skill.name}>
                {skill.name}
              </option>
            ))}
          </select>
        </div>
        <div className="dc-dev">
          <label>DC: </label>
          <input
            type="number"
            value={dc}
            onChange={(e) => setDC(Number(e.target.value))}
          />
        </div>

        <button className="btn" onClick={performSkillCheck}>
          Roll
        </button>
      </div>

      {skillCheckResults.skill && (
        <div>
          <h4>Results</h4>
          <div>{`Skill: ${skillCheckResults.skill}: ${skillCheckResults.totalPoints}`}</div>
          <div>{`Roll: ${skillCheckResults.roll}`}</div>
          <div>{`DC: ${skillCheckResults.dc}`}</div>
          <div>{`Result: ${
            skillCheckResults.passed ? "Passed" : "Failed"
          }`}</div>
        </div>
      )}
    </div>
  );
};

export default SkillCheck;
