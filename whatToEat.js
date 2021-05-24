function myFunction() {
  var myArray = ["Pho", 
  "Ramen", 
  "Steak", 
  "Chicken Wings", 
  "Tacos", 
  "Seafood", 
  "Burgers", 
  "Pizza", 
  "Sushi", 
  "Salad",
  "Pasta", 
  "KBBQ", 
  "Hot Pot", 
  "Subs", 
  "Buffet"
];
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById("demo").innerHTML = randomItem;
}