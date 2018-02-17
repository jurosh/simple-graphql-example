const uuid = require('uuid/v4');

const data = {
  1: {
    id: 1,
    name: 'Juraj',
    age: 45
  },
  2: {
    id: 2,
    name: 'Peto',
    age: 15
  }
};

module.exports = {
  getPeople: () => Object.values(data),
  getPerson: id => data[id],
  createPerson: (name, age) => {
    const newPerson = {
      id: uuid(),
      name,
      age
    };
    data[newPerson.id] = newPerson;
    return newPerson;
  }
};
