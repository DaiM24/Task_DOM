/*Playground #1 - Integrador de eventos
A partir del Click Tracker, generar un contador

El contador debe iniciar en 0.
Debe tener un botón para agregar una unidad (+) y quitar una unidad (-).
No debe permitir número negativos. Se puede utilizar la property "Disabled"
Debe tener un límite de 50. Se puede utilizar la property "Disabled"
Al alcanzar cualquiera de los límites debe generar una interacción con el user. 
(Mensaje en pantalla que arranque en display:none y cambie de display, pueden utilizar un alert, etc)*/

const counterNumber = document.getElementById("counter-number");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");

let counter = 0;

function addNumber(){
    add.addEventListener("click", () => {
        /*if(counter === 5){
           return alert("5 es el tope del contador")
        }*/
        counter++
        if(counter <= 5){
            counterNumber.textContent = counter; 
        }
        if(counter === 5){
            add.disabled = true
        }
        
    })
}
addNumber()

function subtractNumber(){
    subtract.addEventListener("click", () => {
        /*if(counter === 0){
           return alert("Cero es el tope!")
        }*/
        counter--
        if(counter >= 0){
            counterNumber.textContent = counter;
        }
        if(counter === 0){
            subtract.disabled = true
        }
    })
}
subtractNumber()