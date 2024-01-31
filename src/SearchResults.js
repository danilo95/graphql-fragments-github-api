import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import { REPOSITORY_FRAGMENT } from "./fragments";
import "./SearchResults.css";

const SEARCH_QUERY = gql`
  query myOrgRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

const SearchResults = ({ query }) => {
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: { queryString: query },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("data.search", data);

  return (
    <div className="search-results-container">
      <h2 className="search-results-title">Search Results</h2>
      <ul className="results-list">
        {data.search.edges.map((result) => (
          <li key={result.id} className="result-item">
            <div className="result-details">
              <strong>Repository:</strong> {result.node.name},
              <strong>Owner:</strong> {result.node.owner.login}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
