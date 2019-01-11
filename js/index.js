function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
};

let person = {
  name: 'Bob',
  greet: greet
};

let sally = { name: 'Sally' };

greet.call(sally, 'Terry', 'George');
//Hi Terry and George, my name is Sally!

greet.apply(sally, ['Terry', 'George']);
//Hi Terry and George, my name is Sally!

function greet(customer) {
  console.log(`Hi ${customer}, my name is ${this.name}!`);
};

greet.bind(sally)('Bob');
//Hi Bob, my name is Sally!

let newGreet = greet.bind(sally);

newGreet('Bob');
//Hi Bob, my name is Sally!

greet('Bob');
//Hi Bob, my name is !

class Event {

  constructor(title, keywords) {
    this.title = title;
    this.keywords = keywords;
  };

};

class User {

  constructor(name, interests) {
    this.name = name;
    this.interests = interests;
  };

  matchInterests(event) {
    return event.keywords.some(function(word) {
      return this.interests.includes(word);
    }.bind(this));
  };

};

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside'])
