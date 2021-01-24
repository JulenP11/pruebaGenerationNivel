// Demuestra que la siguiente cadena 'geeksforgeeks' no es un palindromo.
// Planteamiento: Es necesario crear una variable que contenga esa string. Aplicar algo para que nos de el texto reverso 
// y con ello tendremos que desarrollar un condicional if que registre si la variable de string y su reverso son lo mismo, si no, dará un error.

function esPalindromo(str){
    //Info sacada de: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/split
    let strReverse = str.split('').reverse().join(''); // creamos el reverso del str.  
        if (str === strReverse){ //aplicamos el condicional para que nos indique si es o no Palindromo 
            console.log('Es un palindromo')
        }
        else {
            console.log('No es un palindromo')
        }
}

esPalindromo('ababa'); //Es un palindromo
esPalindromo('geeksforgeeks'); //No es un palindromo