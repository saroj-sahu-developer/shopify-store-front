import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_SHOPIFY_URI,
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;