function SecanteFunction(funcionOriginal, primerValorX, segundoValorX, Tolerancia, NumIteraciones) {
    let iteracion = 0;
    let XiMenos1 = primerValorX;
    let Xi = segundoValorX;

   
    
        const F_XiMenos1 = funcionOriginal(XiMenos1);
        const F_Xi = funcionOriginal(Xi);
        
        // Calcular Xi+1 usando la fórmula de la secante
        primerXiMasUno = F_Xi *(XiMenos1 - Xi)
        console.log(primerXiMasUno);
        segundoValorXiMasUno = F_XiMenos1 - F_Xi;
        console.log(segundoValorXiMasUno);
        TerminalXiMasUno = Xi - (primerValorX / segundoValorX); 
        console.log(TerminalXiMasUno);
        const XiMas1 = TerminalXiMasUno;
        
        console.log("Esto es Xi+1",XiMas1);
        const F_XiMas1 = funcionOriginal(XiMas1);
        console.log("Esto es F(Xi+1): ",F_XiMas1);


        //Error
        const error = 
        //
        console.log("${iteracion + 1}           |   X(i-1)      |   X(i)           |   X(i+1)          |   F(X(i+1))   |   F(X(i))   |   F(X(i-1))   |");
        console.log("---------------------------------------------------------------------------------------------");
    
        // Mostrar datos en la consola
        console.log(`${iteracion + 1}           |   ${XiMenos1.toFixed(6)}           |   ${Xi.toFixed(6)}    |   ${XiMas1.toFixed(6)}   |   ${F_XiMas1.toFixed(6)}    |   ${F_Xi.toFixed(6)}    |   ${F_XiMenos1.toFixed(6)}`);

        // Verificar si la tolerancia ha sido alcanzada
       

        // Preparar para la siguiente iteración
        XiMenos1 = Xi;
        Xi = XiMas1;
        iteracion++;
    

    return Xi;
}

const aproximacionInicial = 6;
const aproximacionFinal = 7;
const tolerancia = 0.001;
const numIteraciones = 100;

function funcionOriginal(x) {
    return -0.4 * Math.pow(x, 2) + 2.3 * x + 2.1;
}

const resultado = SecanteFunction(funcionOriginal, aproximacionInicial, aproximacionFinal, tolerancia, numIteraciones);
console.log("Resultado final:", resultado);
