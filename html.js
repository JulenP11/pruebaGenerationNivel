HTML
// 1. Crea un div
let div = document.createElement("div")
// 2. Crea un svg.
document.createElementNS("http://www.w3.org/2000/svg", "svg")
// 3. Agrega una clase al div creado en el punto 1.
div.classList.add("pruebaclase")
// 4. Agrega un estilo que cambie la propiedad color al punto 1.
div.style.setProperty('color', 'blue')
// 5. Agrega un atributo id al punto 1.
div.setAttribute('id', 'Julen')
// 6. Crea una pagina en blanco y agrega al body el div con "hello world"
let text = document.createTextNode('hello world')
div.appendChild(text)
document.body.appendChild(div)
// 7. Crea un nuevo div y agregalo como hijo al punto 1 antes de "hello world"
let newDiv = document.createElement('div')
div.insertBefore(newDiv, text)
// 8. Dime los nodos que tiene el primer div.
div.childNodes
// 9. Dime los elementos que tiene el primer div.
div.children
// 10. Busca todos los div de la página.
document.querySelectorAll('div')
// 11. Busca los div que contienen la clase agregada al punto 3.
document.querySelectorAll('.red')
document.getElementsByClassName("red")
// 12. Busca los div que tienen el id agregado en punto 5.
document.getElementById("Julen")
document.querySelectorAll("#julen")