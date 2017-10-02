# Simple GraphQL server

Using express.js

## Setup & Run

```
npm install
npm start
```

Open `http://localhost/graphql`

## Queries

```
{
  hello
}
```

```
{
  person(id: 2) {
    id
    name
  }
}
```

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