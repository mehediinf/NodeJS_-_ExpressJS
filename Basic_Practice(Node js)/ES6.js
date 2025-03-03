

// function myFunction(x=20, y = 10) {
//     // y is 10 if not passed or undefined
//     return x + y;
//   }
// console.log(myFunction());


function sum(...args) {
    let soum = 0;
    for (let arg of args) soum += arg;
    return soum;
  }
  
  let x = sum(4, 9);

  console.log(x);




  const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });




