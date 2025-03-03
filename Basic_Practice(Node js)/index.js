
const person = {
firstName:"Md. Mehdi",
lastName:"Hasan",
fullName: function() {
  return this.firstName + " " + this.lastName;  

},
dept:"CSE"

}
console.error(person.fullName(),person.dept);

let cars = ["BMW","MTech","Volvo","Mini"];

for(let x of cars){
  console.log(x);
}

















