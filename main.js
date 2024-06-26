const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar =document.querySelector("#cerrar");

abrir.addEventListener("click",() =>{
    nav.classList.add("visible"); // al hacer click  de abrir de le agrega clase visible al nav


})

cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible")//al hacer click en btn cerrar se agrega la saca de esa clase
})


