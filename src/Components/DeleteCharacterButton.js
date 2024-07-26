import { useContext } from "react";
import { CharContext } from "../App";
import './CharacterButtons.css';

// This component renders a button to delete a character by a given index.
const DeleteCharacterButton = ({ index }) => {
  const characterDispatch = useContext(CharContext);

  const handleDelete = () => {
    characterDispatch({ type: "CHARACTER_DELETED", payload: index });
  };

  return (
    <button onClick={handleDelete} className="button" style={{marginRight: '65px'}}>
      Delete Character
    </button>
  );
};

export default DeleteCharacterButton;
