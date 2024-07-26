import { useContext } from "react";
import { CharContext } from "../App";
import './CharacterButtons.css';

// This component provides buttons to manage characters, including adding a new character, resetting all characters, and saving all characters.
const CharacterButtons = () => {
  const characterDispatch = useContext(CharContext);

  return (
    <>
      <button
        onClick={() => characterDispatch({ type: "CHARACTER_ADDED" })}
        className="button"
      >
        Add New Character
      </button>
      <button
        onClick={() => characterDispatch({ type: "RESET_ALL_CHARACTERS" })}
        className="button"
      >
        Reset All Characters
      </button>
      <button
        onClick={() => characterDispatch({ type: "SAVE_ALL_CHARACTERS" })}
        className="button"
      >
        Save All Characters
      </button>
    </>
  );
};

export default CharacterButtons;
