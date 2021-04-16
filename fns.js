const fns = {
    sum,
    res,
    mul,
    div,
    pow,
    sqrt,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;

}
function div(a, b) {
// Tener en cuenta division por 0
    if (b ! = 0){
    	
    	return a/b;
    }
    
 // Si b es 0 retornar "Error: div by 0" 

    try {
    	return a/b;
    }

    catch (Exception e){
    	System.out.println(" Error al divir por cero");
    }
}

function pow(a, b) {

    return Math.pow(a, b);
       
}

function sqrt(a){

    return Math.sqrt(a);
    //Calcula el cuadrado de un número
}

module.exports = fns;
