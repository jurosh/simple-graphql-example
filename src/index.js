const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const person = require('./personData');

const PORT = process.env.PORT || 80;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Person {
    id: Int!
    name: String!
    age: Int
  }
  type Query {
    hello: String
    person (id: Int!): Person
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  person: ({ id }) => person[id]
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(PORT);

console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
