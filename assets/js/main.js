/* =========================
KADIN MIMIKA - MAIN JS
========================= */

document.addEventListener("DOMContentLoaded",()=>{

const header=document.getElementById("header");
const menu=document.getElementById("mobile-menu");
const toggle=document.getElementById("menu-toggle");


/* HEADER SCROLL */

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("active");

}else{

header.classList.remove("active");

}

});


/* MOBILE MENU */

if(toggle&&menu){

toggle.addEventListener("click",()=>{

menu.classList.toggle("show");

});

document
.querySelectorAll("#mobile-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("show");

});

});

}


/* SMOOTH SCROLL */

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener("click",(e)=>{

const target=document.querySelector(
link.getAttribute("href")
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


/* CARD ANIMATION */

const cards=
document.querySelectorAll(".card");

if(cards.length){

const observer=
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},

{

threshold:.2

}

);

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
".6s";

observer.observe(card);

});

}


/* STATS */

const numbers=
document.querySelectorAll(".stats h2");

numbers.forEach(el=>{

const text=
el.innerText;

const target=
parseInt(text);

if(isNaN(target)) return;

let current=0;

const timer=
setInterval(()=>{

current+=
Math.ceil(target/30);

if(current>=target){

current=target;

clearInterval(timer);

}

el.innerText=
current+"+";

},40);

});


/* TOP BUTTON */

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

font-size:24px;

cursor:pointer;

display:none;

z-index:99999;

`;

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

topButton.style.display=

window.scrollY>400

?

"block"

:

"none";

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});