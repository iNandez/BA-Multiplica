
/* loader */
window.addEventListener("load",() => {
    const loader= document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(document.body.firstChild)
    })
})
/*  imprimir receta*/
function imprimirPagina(){
    window.print()
}
/* validacion formulario */


