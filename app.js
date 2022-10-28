const box1=document.querySelector(".container-container-1");
const box2=document.querySelector(".container-container-2");
const box3=document.querySelector(".container-container-3");
const box4=document.querySelector(".container-container-4");
const box5=document.querySelector(".container-container-5");
const box6=document.querySelector(".container-container-6");

const choose_num=document.querySelector(".nxt-nxt-1");
const double_num=document.querySelector(".nxt-nxt-2");
const add_num=document.querySelector(".nxt-nxt-3");
const divide_num=document.querySelector(".nxt-nxt-4");
const sub_num=document.querySelector(".nxt-nxt-5");
const play_Again=document.querySelector(".nxt-nxt-6");

const randomNum=document.querySelector("#addNum");
const output=document.querySelector("#ans");

    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";

    function refreshPage(){
        window.location.reload();
    } 

    var num=Math.floor(Math.random()*100)+5;
    
//choose user_num
function chooseNum(){
    console.log("choose Num");
    showBox1();
}

//double it
function doubleNum(){
    showBox2();
}

//add num
function addNum(){
    showBox3();
        randomNum.innerHTML=num;
        
};

//divide half
function divideNum(){
    showBox4();
}

//sub user_num
function subNum(){
    showBox5();
}

//show ans
function playAgain(){
    showBox6();
    console.log(num)
    var ans=num/2;
    output.innerText=ans;
}

function showBox1(){
    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
}
function showBox2(){
    box1.style.display="none";
    box2.style.display="block";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
}
function showBox3(){
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="block";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
}
function showBox4(){
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="block";
    box5.style.display="none";
    box6.style.display="none";
}
function showBox5(){
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="block";
    box6.style.display="none";
}
function showBox6(){
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="block";
}

choose_num.addEventListener("click", doubleNum);
double_num.addEventListener("click", addNum);
add_num.addEventListener("click", divideNum);
divide_num.addEventListener("click", subNum);
sub_num.addEventListener("click",playAgain);
play_Again.addEventListener("click", refreshPage);