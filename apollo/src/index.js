const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { getPeople, getPerson, createPerson } = require('./data/people');

const PORT = process.env.PORT || 81;

const typeDefs = `
  type Person {
    id: ID!
    name: String!
    age: Int
    friend: Person
  }
  
  type Query {
    hello: String
    people: [Person]
    person (id: ID!): Person
  }
  type Mutation {
    createPerson(name: String!, age: Int): Person
  }
`;

const resolvers = {
  Person: {
    id: person => person.id,
    name: person => person.name,
    age: person => person.age || -1,
    friend: person => person.friend
  },
  Query: {
    hello: () => 'Hello world!',
    people: () => getPeople(),
    person: ({ id }) => getPerson(id)
  },
  Mutation: {
    createPerson: (rootObj, { name, age }) => createPerson(name, age)
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});
