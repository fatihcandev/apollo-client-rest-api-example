import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'https://60d2355d858b410017b2d5c1.mockapi.io/',
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
})

const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default ApolloClientProvider
