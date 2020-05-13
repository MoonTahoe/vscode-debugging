import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    gnar: String!
  }
`;

const resolvers = {
  Query: {
    gnar() {
      return "gnarly!!!";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`GraphQL apollo server running at ${url}`);
  console.log("NODE_ENV", process.env.NODE_ENV);
  console.log("PORT", process.env.PORT);
});
