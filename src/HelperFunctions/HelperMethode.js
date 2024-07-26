import { SKILL_LIST } from "../API/constants";

/**
 * Checks if the attributes meet the minimum requirements.
 *
 * @param {Object} attributes - The attributes to check.
 * @param {Object} minimumAttributesRequirements - The minimum requirements for the attributes.
 * @returns {boolean} - True if all attributes meet or exceed the minimum requirements, otherwise false.
 */
export const meetsMinimumRequirements = (attributes, minimumAttributesRequirements) => {
  return Object.keys(minimumAttributesRequirements).every(
    (attribute) => attributes[attribute] >= minimumAttributesRequirements[attribute]
  );
};

/**
 * Calculates the modifier points for a given attribute.
 *
 * @param {number} attributePoints - The points of the attribute.
 * @returns {number} - The calculated modifier points.
 */
export const attributeModifierPoints = (attributePoints) => {
  return attributePoints >= 10
    ? Math.floor((attributePoints - 10) / 2)
    : -Math.ceil((10 - attributePoints) / 2);
};
