let value = document.querySelectorAll(".value");
let calc = "";
let solve = document.querySelector("#solve");
let answer = document.querySelector(".answer");
let clear=document.querySelector('#clear');
let backspace=document.querySelector('#B');
solve.addEventListener("click", () => {
  try {
    answer.innerHTML = eval(calc);
    calc = "";
  } catch (error) {
    answer.innerHTML="Undefined"
  }
});
value.forEach((button) => {
  button.addEventListener("click", () => {
    calc += button.innerText;
    answer.innerHTML = calc;
  });
});

backspace.addEventListener('click',()=>{
 calc= calc.substring(0,calc.length-1);
 answer.innerHTML = calc;
})

clear.addEventListener('click',()=>{
    calc='';
    answer.innerHTML=calc;
})