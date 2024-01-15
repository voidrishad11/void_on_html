const pars = document.querySelectorAll("p.main");
for (let i = 0; i < pars.length; i++) 
{
    pars[i].style.color = "Red";
}
const title = document.querySelector("title");
title.innerHTML = "Welcome";

let link = document.querySelector("#mylink");
link.href = "https://www.google.com/";

let para = document.createElement("p");
let nodes = document.createTextNode("This is a added element");
para.appendChild(nodes);

const div1 = document.querySelector(".new_content");
div1.appendChild(para);

let ele = document.querySelector(".new");
let child = document.querySelector(".p2");
ele.insertBefore(para, child)

let ele2 = document.querySelector(".container");
let child2 = document.querySelector(".main1");
ele2.insertBefore(para, child2);



const button = document.querySelector("button");
button.addEventListener('click',onclick);

function onclick()
{
    const parent = document.querySelector(".container");
    const childd = document.querySelector(".main");
    parent.removeChild(childd);
}