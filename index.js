 /* alert('Estoy');
let start = true; //Revisar variable centinela.

let users = [
    {
        name : "jefe".toUpperCase,
        document : "12345",
        password : "admin01",
        typeUser : "administrador".toUpperCase
    },

    {
        name : "empleado".toUpperCase,
        document : "67890",
        password : "adminempleado",
        typeUser : "administrador".toUpperCase
    },

    {
        name : "jaime".toUpperCase,
        document : "123",
        password : "cliente01",
        typeUser : "cliente".toUpperCase
    },

    {
        name : "camila".toUpperCase,
        document : "456",
        password : "cliente02",
        typeUser : "cliente".toUpperCase
    },

    {
        name : "maria".toUpperCase,
        document : "789",
        password : "cliente03",
        typeUser : "cliente".toUpperCase
    }
];*/

/* let login = function(questionDocument, questionPassword){ */
    //Programa de logearse
    /* let questionDocument = prompt("Digite su Documento de Identidad");
    let questionPassword = prompt("Digite su contraseña");
    //Programa logearse admin
    if(questionDocument && questionPassword === users.document.password){
        //Accion administrador
        function loadCash(typeCash){
            let typeCash = [];
            
            function inputCash(actInputCash){   */
            /* let question100 = parseInt(prompt("Digite la cantidad de billetes de $100.000 COP"));
            let question50 = parseInt(prompt("Digite la cantidad de billetes de $50.000 COP"));
            let question20 = parseInt(prompt("Digite la cantidad de billetes de $20.000 COP"));
            let question10 = parseInt(prompt("Digite la cantidad de billetes de $10.000 COP"));
            let question05 = parseInt(prompt("Digite la cantidad de billetes de $5.000 COP")); */

            /* let actInputCash = inputCash();
            typeCash.push(actInputCash);
            
            function addAllMoney(totalCash){
                let add100 = typeCash[0] * 100000;
                let add50 = typeCash[1] * 50000;
                let add20 = typeCash[2] * 20000;
                let add10 = typeCash[3] * 10000;
                let add05 = typeCash[4] * 5000;

                let totalCash = add100 + add50 + add20 + add10 + add05;
                return totalCash;
            }
            return inputCash();
            }; */
            
            
            
            
        /*}/* ;
        
    }
    else if(questionDocument && questionPassword === users.length){
        function takeMoney()
    }
    return loadMoney();
} */
/* login(); */
/* while(start === true){
    login();
    
} */
    

/* let users = [
    [{
        name : "jefe".toUpperCase,
        document : "12345",
        password : "admin01",
        typeUser : "administrador".toUpperCase
    },
    
    {
        name : "empleado".toUpperCase,
        document : "67890",
        password : "adminempleado",
        typeUser : "administrador".toUpperCase
    }],

    {
        name : "jaime".toUpperCase,
        document : "123",
        password : "cliente01",
        typeUser : "cliente".toUpperCase
    },

    {
        name : "camila".toUpperCase,
        document : "456",
        password : "cliente02",
        typeUser : "cliente".toUpperCase
    },

    {
        name : "maria".toUpperCase,
        document : "789",
        password : "cliente03",
        typeUser : "cliente".toUpperCase
    }
]; */


 let administrator = [{
    name : "jefe".toUpperCase,
    document : "12345",
    password : "admin01",
    typeUser : "administrador".toUpperCase
},

{
    name : "empleado".toUpperCase,
    document : "6789",
    password : "adminempleado",
    typeUser : "administrador".toUpperCase
}]
//---------------------------------------------------------->
let client = [{
    name : "jaime".toUpperCase,
    document : "123",
    password : "cliente01",
    typeUser : "cliente".toUpperCase
},

{
    name : "camila".toUpperCase,
    document : "456",
    password : "cliente02",
    typeUser : "cliente".toUpperCase
},

{
    name : "maria".toUpperCase,
    document : "789",
    password : "cliente03",
    typeUser : "cliente".toUpperCase
}]


//Variables administrador
let question100, question50, question20, question10, question05;
let dinero100, dinero50, dinero20, dinero10, dinero05;
var dineroTotal, totalDenominacion, totalAddDinero;

//Variables Cliente
let questionCliente;

let denominacion = [5000, 10000, 20000, 50000, 100000];
let addDenominacion = [];//Operaciones * 
let denominacionBilletes = [];//Cantidad de billetes

let susDenominacion = [];//Operaciones
let susBilletes = []//cantidad billetes


while(confirm("Quieres aceptar el programa?") === true){
let questionDocument = prompt("Digite su Documento de Identidad");
let questionPassword = prompt("Digite su contraseña");


if(questionDocument === administrator[0]["document"]){
    console.log("Bienvenido, usuario Administrador!");
    console.log("A continuacion, utilize las acciones de Administrador: ")
    question100 = parseInt(prompt("Digite la cantidad de billetes de $100.000 COP"));//.push en cada variable
    question50 = parseInt(prompt("Digite la cantidad de billetes de $50.000 COP"));
    question20 = parseInt(prompt("Digite la cantidad de billetes de $20.000 COP"));
    question10 = parseInt(prompt("Digite la cantidad de billetes de $10.000 COP"));
    question05 = parseInt(prompt("Digite la cantidad de billetes de $5.000 COP"))
    
    denominacionBilletes.push(question100, question50, question20, question10, question05);
    
    totalDenominacion = denominacionBilletes.reduce((acc, el) => acc + el, 0);
    console.log(`El total de billetes ingresados es de ${totalDenominacion} con denominacion de  \n $100.000 ${question100} \n $50.000 ${question50} \n $20.000 ${question20} \n $10.000 ${question10} \n $5000 ${question05}`);
    dinero100 = question100 * 100000;//.push en cada variable
    dinero50 = question50 * 50000;
    dinero20 = question20 * 20000;
    dinero10 = question10 * 10000;
    dinero05 = question05 * 5000;
    addDenominacion.push(dinero100, dinero50, dinero20, dinero10, dinero05);
    totalAddDinero = addDenominacion.reduce((acc, el) => acc + el,0);
    //dineroTotal += totalDenominacion; 
    console.log(`El dinero total del cajero es ${totalAddDinero}`);
        

            
} else if(questionDocument === administrator[1]["document"]){
    console.log("Bienvenido, usuario Administrador!");
    console.log("A continuacion, utilize las acciones de Administrador: ")
    question100 = parseInt(prompt("Digite la cantidad de billetes de $100.000 COP"));//.push en cada variable
    question50 = parseInt(prompt("Digite la cantidad de billetes de $50.000 COP"));
    question20 = parseInt(prompt("Digite la cantidad de billetes de $20.000 COP"));
    question10 = parseInt(prompt("Digite la cantidad de billetes de $10.000 COP"));
    question05 = parseInt(prompt("Digite la cantidad de billetes de $5.000 COP"));
    
    denominacionBilletes.push(question100, question50, question20, question10, question05);
    totalDenominacion = (question100 + question50 + question20 + question10 + question05);
    console.log(`El total de billetes ingresados es de ${totalDenominacion} con denominacion de  \n $100.000 ${question100} \n $50.000 ${question50} \n $20.000 ${question20} \n $10.000 ${question10} \n $5000 ${question05}`);
    dinero100 = question100 * 100000;//.push en cada variable
    dinero50 = question50 * 50000;
    dinero20 = question20 * 20000;
    dinero10 = question10 * 10000;
    dinero05 = question05 * 5000;
    addDenominacion.push(dinero100, dinero50, dinero20, dinero10, dinero05);
    dineroTotal = dinero100 + dinero50 + dinero20 + dinero10 + dinero05;
    console.log(`El dinero total del cajero es ${dineroTotal}`);
        
    } else if(questionDocument === client[0]["document"]){
        console.log("Bienvenido, usuario Cliente!");
        console.log("A continuacion, utilize las acciones de Cliente: ")
        console.log(`El cajero tiene un total de dinero de ${totalAddDinero}, con una denominacion de billetes: \n $100.000 ${question100} \n $50.000 ${question50} \n $20.000 ${question20} \n $10.000 ${question10} \n $5000 ${question05} `)
        console.log(dineroTotal);
        let questionCliente = parseInt(prompt("Digite la cantidad de dinero que desea retirar."));
        if(dineroTotal === 0){
            console.log(`El cajero se encuentra en mantenimiento.`)
        }
        else if(questionCliente > dineroTotal){
            console.log(`Accion Inhabilitada, La cantidad de dinero disponible es de ${dineroTotal}.`)
        }
        else if(questionCliente <= dineroTotal){
            let desClientaCajero = dineroTotal - questionCliente;
            let menosDenominacion = denominacionBilletes.reduce((acc, el) => ( susBilletes -=acc, el), 0);
            susBilletes.push(menosDenominacion);
            let menosDinero = addDenominacion.reduce((acc, el) => ( susBilletes -=acc, el), 0);
            susDenominacion.push(menosDinero);

             
        } else if(questionDocument === client[1]["document"]){
            console.log("Bienvenido, usuario Cliente 02");
            console.log("A continuacion, utilize las acciones de Cliente: ");
            console.log(`El cajero cuenta con un total dinero de ${dineroTotal}, con una denominacion de: \n $100.000 ${question100} \n $50.000 ${question50} \n ${question20} \n $10000 ${question10} \n $5000 ${question05}`);
            console.log(dineroTotal);
        }
    else{
        console.log("El usuario no existe");
        }
    }
}




    

    
    




