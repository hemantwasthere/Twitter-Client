import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      email
      profileImageURL
      tweets {
        id
        content
        imageURL
      }
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      email
      firstName
      lastName
      profileImageURL
      tweets {
        id
        content
        imageURL
        author {
          id
          email
          firstName
          lastName
          profileImageURL
        }
      }
    }
  }
`);
