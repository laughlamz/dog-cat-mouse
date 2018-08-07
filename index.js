var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('Gru');
try {
	cat.eat(dog);
} catch(error) {
	console.log('Error while cat eating dog');
}

console.log(cat);