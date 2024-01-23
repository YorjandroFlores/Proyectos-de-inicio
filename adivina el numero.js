//Variables
let cantidadNumeros = prompt('Escriba cuantos numeros desea jugar')
let numeroSecreto = Math.floor(Math.random()*cantidadNumeros)+1;
console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${cantidadNumeros} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario} . Lo hiciste en ${intentos} ${intentos == 1? 'vez' : 'veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero es menor');
        }else{
            alert('El numero es mayor');
        }
        //se incrementa el contador cuando no es cierto
        intentos ++;
        if(intentos > maximosIntentos)
        {
            alert(`Utilizaste la cantidad maxima de ${maximosIntentos} intentos`);
            break;
        }
    }
}  
