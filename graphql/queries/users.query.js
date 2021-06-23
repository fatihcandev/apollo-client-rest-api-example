import { gql } from '@apollo/client'

export const USERS = gql`
  query {
    users @rest(type: "Person", path: "users", method: "GET") {
      id
      name
      avatar
    }
  }
`
