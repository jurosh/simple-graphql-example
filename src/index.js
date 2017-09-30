const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const person = require('./personData');

const PORT = 80;
const PORT_SSL = 443;

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

// SSL for heroku
app.listen(PORT_SSL);

// 80 for local (but don't do this in real app)
app.listen(PORT);

console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
