import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-juan-oso-dpd1snbg3-juanoso.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'))
