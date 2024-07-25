function SecanteMethod(f, aproximacionInicial, aproximacionFinal, tolerancia, maxAproximaciones){
    let Xi = aproximacionInicial; console.log(Xi); // designamos que Xi es igual que x0 para hacer un cambio de variable 
    let XiMenos1 = aproximacionFinal; console.log(XiMenos1);
    let iteracion = 0; // Lo pónemos en 0 ya que se empieza siempre desde el valor 0 para tomar sus resultados para la sifuiente iteracion

    //Primero
    console.log("Iteración |   X(i-1)   |   X(i)   |   X(i+1)   |   F(X(i+1))   |   F(X(i))   |   F(X(i-1))   |   Error");
    console.log("---------------------------------------------------------------------------------------------");

    //Aqui va el codigo de muestra en la tabla

    //Fin de la tabla

    //Empezamos con lo bueno - Puesto que la tabla tiene que ser un ciclo y parar hasta que el resultado nos de un error minimo al que se pide
    while (iteracion < maxAproximaciones){
        
        const Fxi = f(Xi); 
        console.log(Fxi);
        const FxiMenos1 = f(XiMenos1);

        const siguienteXi = Xi - (Fxi * (Xi - XiMenos1)) / (Fxi - FxiMenos1); // Esta es la formula de Xi+1

        //Calculamos el error relativo
        const error = Math.abs((siguienteXi - Xi) / siguienteXi);

        //Aqui va el muestreo de datos de la tabla en  la consola
        //console.log(`${iteracion + 1}           |   ${XiMenos1.toFixed(6)}           |   ${siguienteXi.toFixed(6)}    |   ${Fxi.toFixed(6)}   |   ${FxiMenos1.toFixed(6)}    |   ${siguienteXi.toFixed(6)}    |   ${error.toFixed(6)}`);         
        //Fin de muestreo

        if(error < tolerancia){
            return siguienteXi;
        }

        //Aqui es donde aremos los incrementos y cambios de variables
        XiMenos1 = Xi;
        Xi = siguienteXi;
        iteracion++; //Contabilizamos la iteracion y le vamos sumando
    }
    console.warn("El metodo de la secante no convergio en ninguna de las iteraciones"); 
    return null;
}

//Nos indique primero las aproximaciones iniciales de la raiz
const aproximacionInicial = 7;
const aproximacionFinal = 6;
const tolerancia = 0.001;
//Despues debe de indicar la tolerancia (diferencia minima entre aproximaciones)
const maxAproximaciones = 100;

//Ejemplo de uso
function myFunction(x) {
    return 1.4 * Math.pow(x, 2) + 2.3 * x + 2.1 ;
}

const activadorDeFuncion = SecanteMethod(myFunction, aproximacionInicial, aproximacionFinal, tolerancia, maxAproximaciones);

if(activadorDeFuncion !== null){
    console.log(`La raiz aproximada es: ${activadorDeFuncion}`);
}else{
    console.error("No es posible encontrar la raiz dentro de la tolerancia");
}
