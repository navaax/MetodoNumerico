function f(x) {
    return 1.4 * Math.pow(x, 2) + 2.3 * x + 2.1 ;
}

function secantMethod(x0, x1, tol, maxIter) {
    let x_prev = x0;
    let x_curr = x1;
    let f_prev = f(x_prev);
    let f_curr = f(x_curr);

    for (let i = 1; i <= maxIter; i++) {
        let denominator = f_curr - f_prev;
        if (Math.abs(denominator) < tol) {
            console.log(`Divergencia detectada en la iteración ${i}`);
            return null;
        }

        let x_next = x_curr - f_curr * (x_curr - x_prev) / denominator;
        let f_next = f(x_next);
        
        let error = Math.abs(x_next - x_curr);
        
        console.log(`${i} | ${x_prev.toFixed(6)} | ${x_curr.toFixed(6)} | ${x_next.toFixed(6)} | ${f_next.toFixed(6)} | ${f_curr.toFixed(6)} | ${f_prev.toFixed(6)} | ${error.toFixed(6)}`);
        
        if (error < tol) {
            return x_next;
        }

        x_prev = x_curr;
        x_curr = x_next;
        f_prev = f_curr;
        f_curr = f_next;
    }

    console.log("El método no convergió después de un número máximo de iteraciones");
    return null;
}

const x0 = 6;
const x1 = 7;
const tol = 0.001;
const maxIter = 100;

const root = secantMethod(x0, x1, tol, maxIter);

if (root !== null) {
    console.log(`La raíz aproximada es: ${root}`);
} else {
    console.log("No se encontró una raíz en el número máximo de iteraciones");
}
