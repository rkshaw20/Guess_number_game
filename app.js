const randomNum=document.querySelector("#addNum");
const output=document.querySelector("#ans");
//choose user_num
//double it
var num=Math.floor(Math.random()*100)+5;
//add num
randomNum.innerHTML=num;
console.log(num);
//divide half
//sub user_num
var ans=num/2;
output.innerText=ans;
// console.log(`your ans is ${ans}`)
// console.log(num);