/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/cherry.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = writeExcuse();
};
let writeExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "sat"];
  let what = ["my homework", "the keys", "the car", "outside my door"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

//write your code here
// declaramos los arrays que me dan
//obtener un valor random de cada array
// concatenar los valores random para armar la oración
//

// console.log("Hello Rigo from the console!");
// en el doc html obtengo un elemento a traves de su id
// document.getElementById(“demo”).innerHTML = “aqui pongo la excusa que vaya a generar”;
