// This is a reducer function written in JavaScript that handles actions related to character attributes and skills. It includes cases for incrementing and decrementing attributes and skills, adding and deleting characters, resetting all characters, and loading character data. The reducer function also includes helper functions to update character attributes and skills, as well as creating a new character object.

import { ATTRIBUTE_LIST, SKILL_LIST } from "../API/constants";

export default function characterReducer(state, action) {
  switch (action.type) {
    case "ATTRIBUTE_INCREMENT":
      return updateCharacterAttribute(
        state,
        action.payload.index,
        action.payload.attribute,
        1
      );
    case "ATTRIBUTE_DECREMENT":
      return updateCharacterAttribute(
        state,
        action.payload.index,
        action.payload.attribute,
        -1
      );
    case "SKILL_INCREMENT":
      return updateCharacterSkill(
        state,
        action.payload.index,
        action.payload.skill,
        1
      );
    case "SKILL_DECREMENT":
      return updateCharacterSkill(
        state,
        action.payload.index,
        action.payload.skill,
        -1
      );
    case "CHARACTER_ADDED":
      return [...state, createNewCharacter()];
    case "CHARACTER_DELETED":
      return state.filter((_, index) => index !== action.payload);
    case "RESET_ALL_CHARACTERS":
      return [];
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
}

function updateCharacterAttribute(state, index, attribute, delta) {
  return state.map((character, idx) =>
    idx === index
      ? {
          ...character,
          attributes: {
            ...character.attributes,
            [attribute]: character.attributes[attribute] + delta,
          },
        }
      : character
  );
}

function updateCharacterSkill(state, index, skill, delta) {
  return state.map((character, idx) =>
    idx === index
      ? {
          ...character,
          skills: {
            ...character.skills,
            [skill]: character.skills[skill] + delta,
          },
        }
      : character
  );
}

function createNewCharacter() {
  return {
    attributes: ATTRIBUTE_LIST.reduce(
      (acc, attribute) => ({ ...acc, [attribute]: 10 }),
      {}
    ),
    skills: SKILL_LIST.reduce(
      (acc, skill) => ({ ...acc, [skill.name]: 0 }),
      {}
    ),
  };
}
