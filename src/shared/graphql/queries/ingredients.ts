import { gql } from "apollo-boost";

export const ingredients = () => {
    return gql`
      {
         ingredients {
            name
            baseUnit
            createdOn
            modifiedOn
         }
      }
    `;
};
