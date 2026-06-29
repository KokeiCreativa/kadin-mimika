document.addEventListener("DOMContentLoaded", function () {

const header=document.getElementById("header");
const menu=document.getElementById("mobile-menu");
const toggle=document.getElementById("menu-toggle");


window.addEventListener("scroll",function(){

if(window.scrollY>80){
header.classList.add("active");
}else{
header.classList.remove("active");
}

});


if(toggle&&menu){

toggle.addEventListener("click",function(){

menu.classList.toggle("show");

});

const links=
document.querySelectorAll("#mobile-menu a");

links.forEach(function(link){

link.addEventListener("click",function(){

menu.classList.remove("show");

});

});

}


const anchors=
document.querySelectorAll('a[href^="#"]');

anchors.forEach(function(link){

link.addEventListener("click",function(e){

const target=
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

window.scrollTo({

top:
target.offsetTop-80,

behavior:
"smooth"

});

}

});

});


const topButton=
document.createElement("button");

topButton.innerHTML="↑";

topButton.style.cssText=`
position:fixed;
right:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#D4A017;
color:#fff;
font-size:22px;
display:none;
cursor:pointer;
z-index:99999;
`;

document.body.appendChild(topButton);

window.addEventListener("scroll",function(){

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});


topButton.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});
