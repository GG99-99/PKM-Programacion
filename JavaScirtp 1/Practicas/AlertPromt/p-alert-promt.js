var edad = prompt('que edad tienes ');
Number(edad);

if (edad > 18){
    document.write('Eres mayor de edad')
}

else if (edad < 18 && edad > 0){
    document.write('Eres menor de edad')
}

else if (edad < 0){
    alert('No es una edad valida')
}

else {
    alert('elemento invalido')
}