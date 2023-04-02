/* Random Number between 1 To 10 */
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionE1 = document.getElementById("question");
const formE1 =document.getElementById("form")
const inputE1= document.getElementById("input")
const scoreE1 = document.getElementById("score")

let score =JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score =0;
}
scoreE1.innerText =`score: ${score}`
questionE1.innerText = `What is ${num1} multiply by ${num2} ?`

const correctAns =num1*num2;

formE1.addEventListener("submit", ()=>{
   const userans = +inputE1.value
   if(userans === correctAns){
    score++;
    updatelocalstorage()
   }
   else{
    score--;
    updatelocalstorage()
   }
})
function updatelocalstorage()
{
    localStorage.setItem("score", JSON.stringify(score))
}