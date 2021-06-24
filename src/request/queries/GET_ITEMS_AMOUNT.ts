import { gql } from "@apollo/client";

const GET_ITEMS_AMOUNT = gql`
  query GetItemsAmount {
    characters {
      info {
        count
      }
    }
    episodes {
      info {
        count
      }
    }
    locations {
      info {
        count
      }
    }
  }
`;

export default GET_ITEMS_AMOUNT;
