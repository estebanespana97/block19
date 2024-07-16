/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// TODO: Add support for more colors

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Fiona",
  "George",
  "Hannah",
  "Isaac",
  "Jack",
  "Katherine",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Samuel",
  "Tina"
];
const priceRange = [10,20,30,40,50,60,70,80,90,100];


const maxNames = 10;
const nameList = [{
  name: 'Steve',
  price: 34,
},
];
let totalCount = nameList[0].price;

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addNameIntervalId = setInterval(addName, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // TODO: Render the cards
  console.log(nameList);
  const cards = document.querySelector("#cards");
  const cardsElements = nameList.map((thisCard) => {
    const element = document.createElement("li");
    element.setAttribute('class', 'card');
    const nameElm = document.createElement('h2');
    nameElm.innerText = thisCard.name;
    const div = document.createElement('div');
    div.setAttribute('class','cardItem');
    div.append(nameElm);
    element.append(div);
    const div2 = document.createElement('div');
    div2.setAttribute('class','cardItem');
    element.append();
    const priceElm = document.createElement('h3');
    priceElm.innerText = thisCard.price;
    element.append(priceElm);
    return element;
  });
  cards.replaceChildren(...cardsElements);
}

/**
 * Add a random shape to the `shapes` array
 */
function addName() {
  //randomizing values and stuff
  const randName = names[Math.floor(Math.random() * names.length)];
  const randPrice = priceRange[Math.floor(Math.random() * priceRange.length)];

  //this is supposed to create the cards but it is creating shapes for some reason 
  const div = document.createElement('div');
  div.setAttribute('class', 'card');
  const nameElm = document.createElement('h3');
  nameElm.innerText = randName;
  div.append(nameElm);
  document.querySelector('ul').append(div);
  
  nameList.push({ name: randName, price: randPrice });
  //setting the average price
  totalCount += randPrice;
  let newAverage = roundToDecimalPlace(totalCount / nameList.length,2);
  let averageStartingPrice = document.getElementById('averageStartingPrice');
  averageStartingPrice.innerText = 'The Average Starting Price is: $' + newAverage;
  console.log(averageStartingPrice);


  
console.log(nameList);
  

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if(nameList.length >= maxNames){
    clearInterval(addNameIntervalId)
  }
}

function roundToDecimalPlace(number, decimalPlaces){
  let factor = Math.pow(10,decimalPlaces);
  return Math.round(number * factor) / factor;
}