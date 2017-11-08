# Simple GraphQL server

GraphQL server using express.js

*Please not that this is only basic implementation. There are more advanced implementations out there - will place links here later :)*

If you want simply generate backend based on Models only, you can use great [GraphCool service](https://www.graph.cool/).
There is interesting [code generator](https://github.com/dotansimha/graphql-code-generator) project.

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
