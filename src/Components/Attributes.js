import { useContext } from "react";
import { CharContext } from "../App";
import { attributeModifierPoints } from "../HelperFunctions/HelperMethode";
import './Attributes.css';

// This component displays attribute actions and allows incrementing and decrementing attribute points based on modifiers.
const Attributes = ({ attributes, index }) => {
  const characterDispatch = useContext(CharContext);

  return (
    <div className="attributes-container">
      <h2>Attributes</h2>
      {/* Iterate over each attribute and its corresponding value */}
      {Object.entries(attributes).map(([attribute, value]) => (
        <div key={attribute} className="attribute">
          <span className="att">
            {`${attribute}: ${value} (Modifier: ${attributeModifierPoints(value)})`}
            {/* Check if the total attribute points are less than 70 before allowing increment */}
            {Object.values(attributes).reduce((total, currentValue) => total + currentValue, 0) < 70 && (
              <button
                className="increment-button"
                onClick={() =>
                  characterDispatch({
                    type: "ATTRIBUTE_INCREMENT",
                    payload: {
                      attribute,
                      index,
                    },
                  })
                }
              >
                +
              </button>
            )}
            {/* Check if the attribute value is greater than 0 before allowing decrement */}
            {value > 0 && (
              <button
                className="decrement-button"
                onClick={() =>
                  characterDispatch({
                    type: "ATTRIBUTE_DECREMENT",
                    payload: {
                      attribute,
                      index,
                    },
                  })
                }
              >
                -
              </button>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Attributes;
