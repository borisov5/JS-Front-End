function createPerson(firstName, lastName, hairColor) {
    const person = {
      name: firstName,
      lastName: lastName,
      hairColor: hairColor
    };
    const jsonString = JSON.stringify(person);
    console.log(jsonString);
  }

  createPerson('George', 'Jones', 'Brown');
  