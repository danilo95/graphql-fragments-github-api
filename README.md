## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Fragment + new properties`

```
const SEARCH_QUERY = gql`  query myOrgRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            ...RepositoryInfo
            url
            description
          }
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}`;
```
