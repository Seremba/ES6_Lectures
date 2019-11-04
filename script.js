/*
lecture: let and const 

ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
ES6
const name6 = 'Jane Smith';
let age6 = 23; 
name6 = 'Jane Miller';
console.log(name6); u will get an error

ES5
function driversLicence(passedTest){
   if (passedTest){
       var firstName = 'John';
       var yearOfBirth = 1990;

       console.log(firstName + 
        ', born in ' + 
        yearOfBirth + 
        ' is now officially allowed to drive a car.');
   }
} 
driversLicence(true);
ES6

function driversLicence(passedTest){
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest){
        firstName = 'John';
    }
    console.log(firstName + 
        ', born in ' + 
        yearOfBirth + 
        ' is now officially allowed to drive a car.');
 } 
 driversLicence(true);
 let i = 0;
 for (var i = 0; i< 5; i++){
     console.log(i);
 }
 console.log(i);

 
 lecture: BlOCKS and IIFES  


(function(){
 var  c = 3;
})();
console.log(c);

 ES6 
{
    const a = 1;
    let b = 2;
}
console.log(a+b);

// lecture: strings 

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge (year){
    return 2016 - year;
}

// ES5 
console.log('This is ' + firstName + '' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old');

// ES6 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old`);
// string methods 

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName}. repeat(8)`);

////////////////////////////////
// Lecture: Arrow functions 
const years = [1990, 1965, 1982, 1937];
// ES5 
var ages5 = years.map(function(el){
 return 2016 -el;
})
console.log(ages5);

// ES6 
let ages6 = years.map(el => 2016 -el);
console.log(ages6);
// for two arguments 
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
///////////////////////////////////////////
// Lecture: Arrow Functions 2

// ES5 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number '
            + self.position 
            + ' and it is ' + 
            self.color
            alert(str);
        })
    }
}
box5.clickMe();

// ES6 

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () =>{
            var str = 'This is box number '
            + this.position 
            + ' and it is ' + 
            this.color
            alert(str);
        })
    }
}
box6.clickMe();

// ES66 

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () =>{
        document.querySelector('.green').addEventListener('click', () =>{
            var str = 'This is box number '
            + this.position 
            + ' and it is ' + 
            this.color
            alert(str);
        })
    }
}
box66.clickMe(); 


function Person(name){
    this.name = name ;
}
// ES5 
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    // console.log(arr);
}

var friends = ['Bob', 'Jane', ' Mark'];
new Person('John').myFriends5(friends);
//  ES6 
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map((el) => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Bob', 'Jane', ' Mark'];
new Person('John').myFriends6(friends);
new Person('Mike').myFriends6(friends);

// Lecture: Destructuring
var john = ['John', 26];
//  var name = john[0];
//  var age = john[1];

//  ES6 
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName : 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName);
 console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b)


function calcAgeRetirement(year){
    const age = new Date().getFullYear()- year;
    return [age, 65- age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

///////////////////////////////
// lecture: Arrays 

const boxes = document.querySelectorAll('.box');
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
})
// ES6 

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

or  
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue'); */

// loops 
// ES5 
/*
for (var i = 0; i< boxesArr5.length ; i++){
    //skipping the blue box to change content in the rest
  if(boxesArr5[i].className === 'box blue'){
      continue;
    //   break 
  }
  boxesArr5[i].textContent = 'I changed to blue';
}
// ES6 
for (const cur of boxesArr6){
    if(cur.className === 'box blue'){
        continue;
    }
    cur.textContent = 'I changed to blue';
}
// better still 
for (const cur of boxesArr6){
    if(cur.className.includes('box')){
        continue;
    }
    cur.textContent = 'I changed to blue';
}
//  array methods 
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){ //creates a new array to show boolean value
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);
// ES6 
// ages.findIndex(cur => cur >=18); findIndex() array method
console.log(ages.findIndex(cur => cur >=18));
// another is  
// ages.find(cur => cur >= 18);  retrieves the number in place of index
console.log(ages.find(cur => cur >= 18)); */

////////////////////////////////////////////////
// Lecture: Spread operator
function addFourAges(a, b, c, d){
    return a + b + c + d;
};
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5 (passing the array into a function)
 var ages = [18, 30, 12, 21];
 var sum2 = addFourAges.apply(null, ages);
 console.log(sum2);
//  ES6 
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.getElementsByClassName.color = 'purple');














