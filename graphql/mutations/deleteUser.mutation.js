import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) @rest(path: "users/{args.id}", method: "DELETE") {
      id
      name
      age
      occupation
    }
  }
`
