const firstName = 'Alex';
const age = 35;
const hasHobby = true;
const person = {
  name: 'Alex',
  age: 35,
  greet() {
    return `Hi, I am ${this.name}`;
  },
};
const hobbies = ['Sports', 'Cooking', 'Hiking'];

setImmediate(() => {
  const enhancedHobbies = hobbies.map((h) => `hobby >>> ${h}`);
  console.log('enhanced hobbies >>>', enhancedHobbies);
});

const fetchData = (callback) => {
  setTimeout(() => {
    callback('Done!');
  }, 1500);
};

const fetchPromisedData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done! (promised)');
    }, 1500);
  });

  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData((text) => console.log(text));
}, 2000);

setTimeout(() => {
  console.log('Timer is done! (promised)');

  fetchPromisedData()
    .then((text) => {
      console.log(text);
      return fetchPromisedData();
    })
    .then((secondText) => {
      console.log(secondText);
    });
}, 2000);

const summarizeUser = (userName, userAge, hasHobby) =>
  `Name is ${userName}, age is ${userAge}, user has hobby is ${hasHobby}`;
const printName = ({ name }) => name;

for (let hobby of hobbies) {
  console.log('hobby >>>', hobby);
}

const result = summarizeUser(firstName, age, hasHobby);
const greeting = person.greet();
const toArray = (...args) => args;
const newArray = toArray('Apple', 'Orange', 'Banana');
const printedName = printName(person);
hobbies.push('Reading');

console.log('summarized user >>>', result);
console.log('greeting person >>>', greeting);
console.log('to array >>>', newArray);
console.log('printed name >>>', printedName);
