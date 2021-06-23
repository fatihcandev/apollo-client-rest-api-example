import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: Person) {
    updateUser(id: $id, input: $input)
      @rest(type: "Person", path: "users/{args.id}", method: "PUT") {
      id
      name
      age
      occupation
    }
  }
`
