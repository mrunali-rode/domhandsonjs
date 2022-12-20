let c=document.getElementById("div1");
console.log(c.innerText);

let h=document.getElementsByTagName('h1');
console.log(h[0].innerText);

let a=document.getElementsByClassName("box");
console.log(a[0].innerText);

let helloElement=document.getElementById("t1");
console.log(helloElement.innerText="Hello world")

function timer(){
    let times =new Date();

    let hr = times.getHours();
    let min =times.getMinutes();
    let sec =times.getSeconds();

    console.log(hr,min.sec);
    document.getElementById("clock").innerHTML=`${hr} : ${min} : ${sec}`;
  
}
setInterval(timer,1000);

let divbox=document.getElementById("divbox");

let box=document.getElementsByClassName("d");
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
 
    divbox.style.flexDirection = "column";
})

let heading=getElementById("heading");
heading.style.color="red";

