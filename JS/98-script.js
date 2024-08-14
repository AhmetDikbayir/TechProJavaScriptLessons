import { sortNumbersASC, sortNumbersDESC, sortTextsASC, sortTextsDESC } from "./sort.js";


const names = ["Ayşe", "Ali", "Can", "Canan", "John", "Conan", "Çiçek"];

const numbers = [65, 75, 32, 158, 3, 250];

document.querySelector("#btnSort1").addEventListener("click", ()=> {
    result.innerHTML = sortNumbersASC(numbers);
});

document.querySelector("#btnSort2").addEventListener("click", ()=> {
    result.innerHTML = sortNumbersDESC(numbers);
});

document.querySelector("#btnSort3").addEventListener("click", ()=> {
    result.innerHTML = sortTextsASC(names);
});

document.querySelector("#btnSort4").addEventListener("click", ()=> {
    result.innerHTML = sortTextsDESC(names);
});
