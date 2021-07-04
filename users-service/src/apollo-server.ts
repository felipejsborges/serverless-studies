import "reflect-metadata"
import { ApolloServer } from 'apollo-server-lambda'
import { buildSchemaSync } from "type-graphql"
import { UserResolver } from "./graphql/resolvers/user.resolver"

const schema = buildSchemaSync({
  resolvers: [UserResolver],
});

const apolloServer = new ApolloServer({
  schema,
  playground: true,
});

export const graphqlHandler = apolloServer.createHandler()
