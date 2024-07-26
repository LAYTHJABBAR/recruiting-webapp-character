import { useRef } from "react";
import { meetsMinimumRequirements } from "../HelperFunctions/HelperMethode";
import './Class.css';
import ClassDialog from "./ClassDialog";

// This component displays the minimum attribute requirements for each class option in the ClassOptions component.
const Class = ({ classOption, attributes, minimumAttributesRequirements }) => {
  
  // useRef hook to persist the dialog box state between renders
  const dialogRef = useRef(null);
  const handleClose = () => {
    dialogRef.current.close();
  };
  return (
    <>
      {/* Dialog box showing the minimum attribute points required for the selected class */}
      <ClassDialog 
        ref={dialogRef} 
        title={`${classOption} Minimum Requirements`} 
        content={Object.entries(minimumAttributesRequirements).map(([attribute, value]) => ({ attribute, value }))}
        onClose={handleClose}
      />

      <div
        onClick={() => dialogRef.current.show()}
        className={`dialog-button ${
          meetsMinimumRequirements(attributes, minimumAttributesRequirements)
            ? "dialog-button-green"
            : "dialog-button-red"
        }`}
        key={classOption}
      >
        {classOption}
      </div>
    </>
  );
};

export default Class;
