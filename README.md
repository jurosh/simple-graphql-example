# Simple GraphQL server

GraphQL server using express.js

*Please not that this is only basic implementation.*

If you want simply generate backend based on Models only, you can use great [GraphCool service](https://www.graph.cool/).
There is interesting [code generator](https://github.com/dotansimha/graphql-code-generator) project.

Another interesting project from Graphcool is [**Prisma**](https://github.com/graphcool/prisma).
Prisma can easily generate ready to run GraphQL backend and can be hosted myself or in Prisma cloud.

To learn more about GraphQL visit [GraphQL official website](http://graphql.org/learn/).

## Setup & Run

```
npm install
npm start
```

Open `http://localhost/graphql`

## Queries

Say Hello:

```
{
  hello
}
```

Get person by id:

```
{
  person(id: 2) {
    id
    name
  }
}
```

Get people:

```
{
  people {
    name
    age
  }
}
```

```
mutation {
  createPerson(name: "Juraj", age: 35) {
    id
    name
  }
}
```

# Interesting links

GraphQL visualizers:

- GraphqlViz https://github.com/sheerun/graphqlviz
- Voyager https://apis.guru/graphql-voyager/ (https://github.com/APIs-guru/graphql-voyager)