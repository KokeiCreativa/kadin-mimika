```javascript
/* FILE: assets/js/main.js */



const header =

document.getElementById(
"header"
);



window.addEventListener(

"scroll",

()=>{

if(

window.scrollY>80

){

header.classList.add(

"active"

);

}

else{

header.classList.remove(

"active"

);

}

}

);




const links =

document.querySelectorAll(
'nav a'
);



links.forEach(

(link)=>{

link.addEventListener(

'click',

function(e){

e.preventDefault();



const target=

document.querySelector(

this.getAttribute(

'href'

)

);



window.scrollTo({

top:

target.offsetTop-80,

behavior:

'smooth'

});

});

}

);




const cards=

document.querySelectorAll(
'.card'
);



const observer=

new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(

entry.isIntersecting

){

entry.target.style.opacity=1;

entry.target.style.transform=

'translateY(0)';

}

}

);

},

{

threshold:.2

}

);



cards.forEach(

(card)=>{

card.style.opacity=0;

card.style.transform=

'translateY(40px)';

card.style.transition=

'.7s';

observer.observe(

card

);

}

);




const numbers=

document.querySelectorAll(
'.stats h2'
);



const animate=(el)=>{

let current=0;

const target=

parseInt(

el.innerText

);



const timer=

setInterval(

()=>{

current+=

Math.ceil(

target/40

);



if(

current>=target

){

current=target;

clearInterval(

timer

);

}



el.innerText=

current+

'+';

},

40

);

};



const statObserver=

new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(

entry.isIntersecting

){

animate(

entry.target

);

}

}

);

}

);



numbers.forEach(

(item)=>{

statObserver.observe(

item

);

});




const topButton=

document.createElement(
"button"
);



topButton.innerHTML=
"↑";



topButton.style.position=
"fixed";

topButton.style.right=
"20px";

topButton.style.bottom=
"20px";

topButton.style.width=
"55px";

topButton.style.height=
"55px";

topButton.style.border=
"0";

topButton.style.borderRadius=
"50%";

topButton.style.cursor=
"pointer";

topButton.style.fontSize=
"24px";

topButton.style.background=
"#D4A017";

topButton.style.display=
"none";

topButton.style.zIndex=
"999";



document.body.appendChild(

topButton

);



window.addEventListener(

"scroll",

()=>{

if(

window.scrollY>

400

){

topButton.style.display=

"block";

}

else{

topButton.style.display=

"none";

}

}

);



topButton.addEventListener(

"click",

()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

);




window.addEventListener(

"load",

()=>{

document.body.style.opacity=

1;

}

);

```
