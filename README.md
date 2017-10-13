# Simple GraphQL server

GraphQL server using express.js

*Please not that this is only basic implementation. There are more advanced implementations out there - will place links here later :)*

If you want simply generate backend based on Models only, you can use great [GraphCool service](https://www.graph.cool/).

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

Get all people:

```
{
  people {
    name
    age
  }
}
```
