import { gql } from "graphql-tag";

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryInfo on Repository {
    id
    name
    owner {
      login
    }
  }
`;
