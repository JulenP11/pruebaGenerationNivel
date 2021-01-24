// Demuestra que la siguiente cadena 'geeksforgeeks' no es un palindromo.
// Planteamiento: Es necesario crear una variable que contenga esa string. Aplicar algo para que nos de el texto reverso y con ello crear un array que recorra mediante bucle for
// y con ello tendremos que desarrollar un condicional if que registre si la variable de string y su reverso son lo mismo, si no, dará un error.

function esPalindromo(str){
    let strReverse = str.split('').reverse().join(''); // creamos el reverso del str
    let strArray = [str, strReverse] // creamos el array  
    for (let i = 0; i = strArray; ++i){
        if (str === strReverse){
            console.log('Es un palindromo')
            break;
        }
        else {
            console.log('No es un palindromo')
            break;
        }
    }
}