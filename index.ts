import { people } from "./people";

//Write a function that return the number of people that have starships
//use the Array.prototype.filter method
function cntHasStarShip() {
  return people.filter(p => p.starships.length != 0).length;
}

console.log("Has starships:");
console.log(cntHasStarShip());

//Add a vehiclesCount property to each object, the value of the property is number of items of the array of vehicles property
function addVehiclesCount() {
  //let perrson = {vehiclesCount: 0};
  people.forEach(person => (person["vehiclesCount"] = person.vehicles.length));
}

addVehiclesCount();
console.log("Vehicles Cnt:");
console.log("--------------");
people.forEach(p => console.log(p.name, p.vehiclesCount));

//Sort the people object by the number of items in the array of films property
//use the Array.prototype.sort method
function sortByFilmsCnt() {
  people.sort((p1, p2) => p2.films.length - p1.films.length);
}
console.log(" ");
console.log("Sorted by films:");
console.log("----------------");
sortByFilmsCnt();
people.forEach(p => console.log(p.name, p.films.length));

//Sort the people objects by the number of items in the starships array and within that by the number of items in the vehicles array
//use the Array.prototype.sort method
function sortByStarshipsandVehicles() {
  people.sort(
    (p1, p2) =>
      p2.starships.length - p1.starships.length ||
      p2.vehiclesCount - p1.vehiclesCount
  );
}
console.log(" ");
console.log("Sorted by starships, vehicles:");
console.log("----------------");
sortByStarshipsandVehicles();
people.forEach(p => console.log(p.name, p.starships.length, p.vehiclesCount));

//Count the total number of vehicles
//use the Array.prototype.reduce method
function countVehicles() {
  const reducer = (accumulator, current) => accumulator + current.vehiclesCount;
  return people.reduce(reducer, 0);
}

console.log(" ");
console.log("Total vehicles count:");
console.log("---------------------");
console.log(countVehicles());



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
