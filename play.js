const firstName = 'Alex';
const age = 35;
const hasHobby = true;

const summarizeUser = (userName, userAge, hasHobby) => {
  return `Name is ${userName}, age is ${userAge}, user has hobby is ${hasHobby}`;
};

const result = summarizeUser(firstName, age, hasHobby);

console.log(result);
