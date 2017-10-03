const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { createPerson, getPeople, getPerson } = require('./data/people');

const PORT = process.env.PORT || 81;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Person {
    id: ID!
    name: String!
    age: Int
  }
  type Query {
    hello: String
    people: [Person]
    person (id: ID!): Person
  }
  type Mutation {
    createPerson(name: String!, age: Int): Person
  }  
`);

// The root provides a resolver function for each API endpoint
const root = {
  // Queries
  hello: () => 'Hello world!',
  people: () => getPeople(),
  person: ({ id }) => getPerson(id),
  // Mutations
  createPerson: ({ name, age }) => createPerson(name, age)
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
