import { gql } from '@apollo/client'

export const USER_DETAILS = gql`
  query GetUserDetails($id: Int!) {
    userDetails(id: $id)
      @rest(type: "Person", path: "users/{args.id}", method: "GET") {
      id
      name
      avatar
      age
      occupation
    }
  }
`
