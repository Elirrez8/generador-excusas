/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  //write your code here
  console.log("Eli's excuses' machine");
  let who = ["Mi primo", "Mi papá", "Mi mamá", "Mi ave"];
  let action = [
    "vendio",
    "desintegro con acido muriatico",
    "quemo",
    "se llevo"
  ];
  let what = [
    "mi ensayo",
    "mi celular",
    "el unico usb con mi tesis de grado",
    "los documentos"
  ];
  let when = ["en la mañana", "antes de salir", "ayer", "en la noche"];

  let concatenar = [who, action, what, when];
  console.log("Arreglos sin constuir aun: " + JSON.stringify(concatenar));
  concatenar = concatenar.map(arreglo => {
    let num = Math.floor(Math.random() * (arreglo.length - 1));
    console.log(num);
    return arreglo[num];
  });
  console.log(
    "Elementos aleatorios por arreglo: " + JSON.stringify(concatenar)
  );
  let excuses = concatenar.join(" "); // join es un metodo para imprimir la excusa con espacio entre sus arreglos
  let excusaDOM = document.getElementById("excuses");
  excusaDOM.innerHTML = excuses;
};
window.addEventListener("DOMContentLoaded", window.onload);
