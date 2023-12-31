function sumando1 (inicio, limite){

    if (inicio < limite){
        while (inicio < limite) {
            inicio ++
            document.write(inicio + " "); 

            if (inicio == limite){
                break
            }
        }
    }
};

let valor_inicial = prompt("Cual es valor inicial ");
let valor_Limite = prompt("Cual es el limite ");

sumando1(valor_inicial, valor_Limite)