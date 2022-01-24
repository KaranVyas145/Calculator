let value = document.querySelectorAll(".value");
let calc = "";
let solve = document.querySelector("#solve");
let answer = document.querySelector(".answer");
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#B");
// solve.addEventListener("click", () => {
//   try {
//     answer.innerHTML = eval(calc);
//     calc = "";
//   } catch (error) {
//     answer.innerHTML="Undefined"
//   }
// });

// Mouse Click events
solve.addEventListener("click", solveit);
backspace.addEventListener("click", del);
clear.addEventListener("click", clearall);
value.forEach((button) => {
  button.addEventListener("click", () => {
    calc += button.innerText;
    answer.innerHTML = calc;
  });
});

// backspace.addEventListener('click',()=>{
//  calc= calc.substring(0,calc.length-1);
//  answer.innerHTML = calc;
// })

// clear.addEventListener('click',()=>{
//     calc='';
//     answer.innerHTML=calc;
// })

// Keyboard Click Events
document.addEventListener("keydown", (e) => {
  // console.log(e);..
  // if(parseInt(e.key)!=NaN){
  //   calc+=e.key;
  //   answer.innerHTML=calc;
  // }
  // let reg=/[48-50]/;
  // console.log(isFinite(e.key));
  if (isFinite(e.key)) {
    calc += e.key;
    answer.innerHTML = calc;
  }
  else if(e.key==="/"||e.key==="*"||e.key==="+"||e.key==="-"||e.key==="%"||e.key==="."){
    calc += e.key;
    answer.innerHTML = calc;
  }
  else if(e.key==="Enter"||e.key==="="){
    solveit();
    console.log("solved");
  }
  else if(e.key==="Backspace"){
    del();
  }
  else if(e.key.toLowerCase()==="c"){
    clearall();
  }
  
});

function clearall() {
  calc = "";
  answer.innerHTML = calc;
}

function solveit() {
  try {
    answer.innerHTML = eval(calc);
    // answer.innerHTML = calc;
    console.log(eval(calc));
    calc = "";
  } catch (error) {
    answer.innerHTML = "Undefined";
  }
}

function del() {
  calc = calc.substring(0, calc.length - 1);
  answer.innerHTML = calc;
}
