// use this to copy code snippets or use your browser's console
let sally = {name: 'Sally'}

function greet(customer) {
  console.log(`Hi ${customer}, my name is ${this.name}`)
}

greet.call(sally, 'Bob')

let sallyGreet = greet.bind(sally)

sallyGreet('Bob')
