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
<<<<<<< HEAD
=======

>>>>>>> 549611a54e39d09576c41d6d05a98a97ebb505a5

    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0" 
    
  if ( b == 0) {
        
    console.log('Error: div by 0 !');	

    } else {
         
        return a / b;
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
