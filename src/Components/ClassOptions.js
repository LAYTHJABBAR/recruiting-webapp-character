import Class from "./Class";
import './ClassOptions.css';

// This component displays the Classes column with 3 Class options: Barbarian, Wizard, and Bard.
const ClassOptions = ({ classOptions, attributes }) => {
  return (
    <div className="class-options-container">
      <h2>Classes</h2>
      {/* Render a Class component for each class option, passing the appropriate props and a unique key */}
      {Object.entries(classOptions).map(([classOption, minimumAttributesRequirements]) => (
        <Class
          key={classOption}
          classOption={classOption}
          attributes={attributes}
          minimumAttributesRequirements={minimumAttributesRequirements}
        />
      ))}
    </div>
  );
};

export default ClassOptions;
