// Kulvinder Singh
// 5th October, 2002

// Exercise 2:
// Q: Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Name = "Kulvinder Singh";
console.log("Hello ", Name);

//Exercise 3:
//Q:  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log("LowerCase => ", Name.toLowerCase());
console.log("UpperCase => ", Name.toUpperCase());
console.log("TitleCase => ", Name);

//Exercise 4:
//Q: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let Quote = "The way to get started is to quit talking and begin doing.";
console.log('Walt Disney once said, "', Quote, '"');

//Exercise 5:
// Q: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famousName = "Walt Disney";
let mesg;
mesg = famousName;
mesg += ' once said " ';
mesg += Quote;
mesg += '"';
console.log(mesg);

//Exercise 6:
// Q: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var text = " \t Kulvinder Singh \n ";
console.log(text);
//removing WS
console.log(text.trim());

//Exercise 7,8:
//Q: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:
// console.log(5 + 3)

console.log(10 + 23);
console.log(30 - 4);
console.log(11 * 3);
console.log(35 / 7);

//Exercise 9
// Q: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var fNum = 13;
message = "My favorite Number is " + fNum;
console.log(message);

//Exercise 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.

//DONE

//Excersise 11
// Q: Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.

const names = ["Sameer ", "Karan", "Usama", "Minahil"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Exercise 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//  The text of each message should be the same,but each message should be personalized with the person’s name.

for (let i = 0; i < 4; i++) {
  console.log("Good Morning ", names[i]);
}

// //Exercise 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const myAr = [
  "I would like to own Audi",
  "My favorite bike is Suzuki motercycle",
  "Ford cars are more comfortable",
];
console.log(myAr[0]);
console.log(myAr[1]);
console.log(myAr[2]);

//Exercise 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const myLi = ["Sameer ", "Minahil ", "Karan "];
console.log(
  "Hye ",
  myList[0],
  "I would like you to invite at my home for dinner"
);
console.log(
  "Hye ",
  myList[1],
  "I would like you to invite at my home for dinner"
);
console.log(
  "Hye ",
  myList[2],
  "I would like you to invite at my home for dinner"
);

// //Exercise 15

console.log(
  "unfortunately it seems ",
  myList[1],
  " couldn't make to the dinner."
);

myList[1] = "Ali";
console.log(
  "Hello ",
  myList[0],
  "I would like you to invite at my place for dinner"
);
console.log(
  "Hello ",
  myList[1],
  "I would like you to invite at my place for dinner"
);
console.log(
  "Hello ",
  myList[2],
  "I would like you to invite at my place for dinner"
);

// //Exercise 16

console.log(
  "Hurrayyy it seems like i got a bigger table so was planning to invite few more guests"
);
myList.unshift("daniyal");
myList.push("zeeshan");
myList.splice(2, 0, "noman");
console.log(
  "Hello ",
  myList[0],
  "I would like you to invite at my place for dinner"
);
console.log(
  "Hello ",
  myList[1],
  "I would like you to invite at my place for dinner"
);
console.log(
  "Hello ",
  myList[2],
  "I would like you to invite at my place for dinner"
);
console.log(
  "Hello ",
  myList[3],
  "I would like you to invite at my place for dinner"
);
console.log(
  "Hello ",
  myList[4],
  "I would like you to invite at my place for dinner"
);
console.log(
  "Hello ",
  myList[5],
  "I would like you to invite at my place for dinner"
);

// //Exercise 17

console.log("Due to some reason I can't invite more then two people\n");
var index = 5;

for (let i = 5; i > 1; i--) {
  console.log("Sorry ", myList[i], "you are not invited for the dinner");
  myList.pop();
}
console.log(myList[0], " you are still invited for the dinner");
console.log(myList[1], " you are still invited for the dinner");
var length = myList.length;
myList.pop();
myList.pop();
for (let i = 0; i < 5; i++) {
  console.log(myList[i]);
}
//     //Exercise 18

const favPlaces = ["Cannda", "USA", "Kashmir", "Japan", "London"];
const favPlaces2 = favPlaces;

console.log("Array in original ordder\n");
for (let i = 0; i < 5; i++) {
  console.log(favPlaces[i]);
}

favPlaces.sort();
console.log("\nAlphabetical order without modifying the actual list.\n");

for (let i = 0; i < 5; i++) {
  console.log(favPlaces[i]);
}

favPlaces.reverse();
console.log("\nReverse the order of array\n");
for (let i = 0; i < 5; i++) {
  console.log(favPlaces[i]);
}

//Exercise 19
    console.log("The number of guests I have invited are: " , length);

//Exercise 20  , 21

const langArr = ["Multan " , "Karachi ", "Fasilabad" ,  "Hadrabad" , "Lahore"];

//Exersise 23

// True Statments

// 1
let language = "JavaScript";
console.log("Is language == 'JavaScript'? I predict True.");
console.log(language == 'JavaScript');

//2
let country = "Pakistan";
console.log("Is country == 'Pakistan'? I predict True.");
console.log(country == 'USA');

//3
let park = "Iqbal Park";
console.log("Is park == 'Iqbal Park'? I predict True.");
console.log(park == 'Iqbal Park');

//4
let vacation = "Swat";
console.log("Is vacation == 'Swat'? I predict True.");
console.log(vacation == 'Swat');

//5
let fruit = "banana";
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'banana');

//False

// 6
console.log("Is language == 'JavaScript'? I predict False.");
console.log(language != 'JavaScript');

//7
console.log("Is country == 'Pakistan'? I predict False.");
console.log(country != 'USA');

//8

console.log("Is park == 'Iqbal Park'? I predict False.");
console.log(park != 'Iqbal Park');

//9
console.log("Is vacation == 'Swat'? I predict False.");
console.log(vacation != 'Swat');

//10
console.log("Is fruit == 'apple'? I predict False.");
console.log(fruit != 'banana');



// //Exercise 24


console.log("good == 'bad'? I predict it is False ");
console.log("good" == "bad");
 
let car = "TOYOTA";
console.log("TOYOTA == 'toyota' ? I predict it is false");
console.log(car == car.toLowerCase())

console.log("I predict it is false");
console.log(2 == 10)

console.log("50 =='50' ? I predict it is true");
console.log(50 == 50)

// //Exercise 25

let allin_color = "green";

    if (allin_color == "green"){
        console.log("You earned 5 points");
    }


// //Exercise 26


    allin_color = "red";

    if (allin_color == "green") {
        console.log("You earned 5 points");
    }
    else{
        console.log("You earned 10 points");
    }



  // //Exercise 27

  allin_color = "yellow";
    if (allin_color == "green") {
        console.log("You earned 5 points");
    }

    else if (allin_color == "red"){
        console.log("You earned 15 points")
    }

    else{
        console.log("You earned 10 points");
    }

//     //Exercise 28
    let age = 24;

    if (age <2 ){
        console.log("You are a small baby");
    }

    else if( age >=2 && age < 4){
        console.log("You are a toodler");
    }

    else if(age >= 4 && age < 13){
        console.log("You are a kid");
    }
    else if(age>=13 && age < 20){
        console.log("You are a teenager");
    }

    else if(age>= 20 && age < 65){
        console.log("You are adult");
    }

    else{
        console.log("You are elder");
    }



// //Exercise 29
const favFruit = ["apple"  ,"banana",, "mango"];

for(var i = 0 ; i <=3 ; i++){
  
    if (favFruit[i] == "mango")
        console.log("You really like ", favFruit[i]);
    else if (favFruit[i] =="banana")
        console.log("You really like ", favFruit[i]);
    else if (favFruit[i] == "apple")
        console.log("You really like ", favFruit[i]);
}

//     //Exercise 30

const usernames = ["ali_khan" , "xyz" , "admin" , "harry" , "developer"];
    for (let i = 0 ; i <5 ; i++){
        if (usernames[i] == "admin")
            console.log("Hello Admin, would you like to see a status report");
        else
            console.log("Hello " ,usernames[i], "thankyou for logging in again.");
    }


    //Exercise 31

    for(let i = 0 ; i < 5 ; i++){
        usernames.pop();
    }

    if (usernames[0] == undefined){
        console.log("We need to find some users!");
    }

//     //Exercise 32

const current_users = ["xyz" , "kulvinder" , "alikhan", "sameer"];
const new_users = ["muzamil" , "iqbal" , "alikhan" , "bob"];

for (let i = 0 ; i <4 ; i ++){

    for(let j = 0 ; j< 4 ; j++){

        if (new_users[i].toUpperCase() == current_users[j].toUpperCase()) {
            console.log("Sorry this user ", current_users[j]," has already been taken.Enter new user"); 
        }
    }
}

    //Exercise 33

    var numArr = [1,2,3,4,5,6,7,8,9];

    for (let i=0 ; i <=8; i++){
  
        if (numArr[i] == 1)
              console.log(numArr[i] ,"st");
  
          else if (numArr[i]==2)
              console.log(numArr[i],"nd");
  
          else if (numArr[i] ==3)
              console.log(numArr[i],"rd");
          else
          console.log(numArr[i],"th");
    }


  //Exercise 34

  const pizzaName = ["Fajita" , "Muglai", "Chicken Tikka" ];

  for (let i = 0 ;i < 3 ; i++) {

    console.log( pizzaName[i] , "is good pizza but ");
  
  console.log(" I like pepperoni pizza");

  }





//   //Exercise 35

  const animal = ["dog", "cat","rabbit"];

  for (let i = 0 ; i < 3; i++){

    if (i == 0)
        console.log(animal[i] , " makes a great pet.");

    else if (i == 1)
        console.log(animal[i] , " is my cute pet");

    else
        console.log(animal[i], " are snoogy");

  }

  console.log(" Dogs, Cat and Rabbit could be a friendly pets. ")

//   //Exercise 36 / 37

  function make_shirt(size , text ){

//     if (size == "L " || size =='M')
//         console.log("I love JavaScript");

//     else{
//         console.log("Size is ", size, " Message is:' ", text, "'");

//     }
//   }

//   make_shirt("L" , "Do it Now");
//   make_shirt("S", "Keep Smiling");
make_shirt("L","Superman");

//   //Exercise 38

//     function describe_city(city , country){
//         console.log( city , " is in " , country);
//     }

//    //Exercise 39

//     describe_city("Lahore" , "Pakistan");
//     describe_city("Mumbai", "India");
//     describe_city("Chicago", "USA");

//     function city_country(city , country){

//         return "'" + city+","+ country+"'";
//     }

//     var sentence = city_country("Newyork" , "USA");

//     console.log(sentence);

//     //Exercise 40

//     function make_album(artist_name , album_title){

//         const music = {artistName: artist_name , albumTitle: album_title};

//         return music;
//     }

// let music = make_album("Marvin Gaye ", "Soul");

//     console.log(music);
//     music = make_album("Weekend" , "After Hours");
//     console.log(music);
//     music = make_album("Drake" ,"Take Care" );
//     console.log(music);

//     //Exercise 41

//     function show_magician(magicianArray){

//         for (let i = 0 ; i < 3 ; i++){
//             console.log(magicianArray[i]);
//         }

//     }
// //Exercise 42 , 43

// function make_great(magicainArray){
//         var magicianArray2 = [].concat(magicainArray);

//         for (let i =0 ; i < 3; i++){
//             magicianArray2[i]+= " The Great";
//         }

//         return magicianArray2;
// }

// var magicianArray = [ "Dynamo" , "Apollo Robbins" , "David Blaine." ];
// var magicianArray2 = [];
//     show_magician(magicianArray);

//     magicianArray2 = make_great(magicianArray);
//     show_magician(magicianArray2);
//     console.log("Original list is");
//     show_magician(magicianArray);

// // Exercise 44

//     function sandwich(items){
//         console.log("The customer needs these topping in there sandwich:")
//         for (let i = 0 ; i< arguments.length ; i++){
//             console.log(arguments[i]);
//         }
//     }

//     sandwich("Chicken" , "Olives","Onion", "Cheese");
//     sandwich("Tofu" , "Cheese");

// //Exercise 45

//    function car (manufacturer, model){

//     const carDetails = {manufacturer_name : manufacturer , model_year : model , color:arguments[2] , feature:arguments[3]};
//     return carDetails;
//    }

//    var carDetails = car("Toyota" , 2019 , "White" , "Sunroof");

//    console.log(carDetails);

//    carDetails = car("Honda" , 2017 , "Black" , "Heated seats");
//    console.log(carDetails);
