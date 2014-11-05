// nick@theironyard.com
// calvin@theironyard.com
// sally@theironyard.com - she does not need access to bitbucket

console.log("Hello World!");

// var brooke = "Brooke Casey";
var numberOne = 100;
var students = ["Brooke", "Cary", "Laryea", "Rich", "Amber", "Kyle", "John", "Doc", "Julia", "Bill", "Stephen", "Abby", "John x 2"];

// console.log(brooke);
// console.log(typeof(brooke));
console.log(numberOne);
console.log(typeof(numberOne));
console.log(students.length);

// Student();
// Lexical Scope

function Student(firstName, lastName) {
  // console.log("Hello World");
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function() {
    return this.firstName + " " + this.lastName;
  }
}

var brooke = new Student("Brooke", "Casey");
// console.log(brooke.firstName);
// console.log(brooke.lastName);
console.log(brooke.getName());
// Student();

function Bro(name, health, power) {
  this.name = name;
  this.health = health;
  this.power = power;

  this.doDamage = function(opponent){
    this.health = this.health - opponent.power;
  }
}

var broOne = new Bro("Chad", 100, 15);
var broTwo = new Bro("Trevor", 100, 20);
var broThree = new Bro("Chuck", 100, 8);

// broOne
// console.log(broTwo.health)
// console.log(broTwo.health)
// && = and
// && = or

while( broTwo.health > 0 && broOne.health > 0 ) {
  broTwo.doDamage(broOne);
  console.log(broTwo.health);
  broOne.doDamage(broTwo);
  console.log(broOne.health);
  if(broTwo.health > 0 && broOne.health <= 0){
    console.log(broTwo.name + " wins the beer!");
  }
  if(broOne.health > 0 && broOne.health <= 0){
    console.log(broOne.name + " wins the beer!");
  }  
}

Bro.prototype.look = function() {
  if(this.name == "Chad") {
    return "Jorts";
  }
  if(this.name == "Trevor") {
    return "Pink polo shirt";
  }
  if(this.name == "Chuck") {
    return "Chuck Taylor's";
  }
}
console.log("Aasdf \" asdf");
console.log('Aasdf \'asdf\' asdf');
broOne.name = null;
// broOne

// Shim
if(console){
  console.log(broOne.look());
}
