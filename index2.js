const admin = [
    {
        nombre : "Brian",
        documento : "123",
        password : "123",
        tipoUsuario : "administrador".toUpperCase()
    },
]
const cli =[   
    {
        nombre : "Maria",
        documento : "456",
        password : "456",
        tipoUsuario : "cliente".toUpperCase()
    }
]



let billetesCajero = [
    {
        denominacion : "100000",
        cantidad : 0,
        valor : 100000,
        total : 0,
    },

    {
        denominacion : "50000",
        cantidad : 0,
        valor : 50000,
        total : 0,
    },

    {
        denominacion : "20000",
        cantidad : 0,
        valor : 20000,
        total : 0,
    },

    {
        denominacion : "10000",
        cantidad : 0,
        valor : 10000,
        total : 0,
    },

    {
        denominacion : "5000",
        cantidad : 0,
        valor : 5000,
        total : 0,
    }
];

//Array Cliente 

let billetesCliente = [
    {
        denominacion : "100000",
        cantidad : 0,
        valor : 100000,
        total : 0
    },

    {
        denominacion : "50000",
        cantidad : 0,
        valor : 50000,
        total : 0
    },

    {
        denominacion : "20000",
        cantidad : 0,
        valor : 20000,
        total : 0
    },

    {
        denominacion : "10000",
        cantidad : 0,
        valor : 10000,
        total : 0
    },

    {
        denominacion : "5000",
        cantidad : 0,
        valor : 5000,
        total : 0
    }
];

let cantidadBillete100, cantidadBillete50, cantidadBillete20, cantidadBillete10, cantidadBillete05;
let push100, push50, push20, push10, push05;
let mult100, mult50, mult20, mult10, mult05;
let total100, total50, total20, total10, total05, totalTotal;

//Variables para Cliente

let retiro;

while(confirm("Quieres aceptar el programa?") === true){
    let questionDocument = prompt("Bienvenido a su documento de Identidad");
    let questionPassword = prompt("Digite su contrasena");


    if(questionDocument === admin[0]["documento"]){
        alert("Bienvenido al Panel de administrador.");
        alert("A continuacion, utilize las acciones de Administrador: ");
        cantidadBillete100 = parseInt(prompt("Digite la cantidad de billetes de $100.000"));
        push100 = billetesCajero[0].cantidad += cantidadBillete100;
        billetesCajero.push(push100);
        cantidadBillete50 = parseInt(prompt("Digite la cantidad de billetes de $50.000"));
        push50 = billetesCajero[1].cantidad += cantidadBillete50;
        billetesCajero.push(push50);
        cantidadBillete20 = parseInt(prompt("Digite la cantidad de billetes de $20.000"));
        push20 = billetesCajero[2].cantidad += cantidadBillete20;
        billetesCajero.push(push20);
        cantidadBillete10 = parseInt(prompt("Digite la cantidad de billetes de $10.000"));
        push10 = billetesCajero[3].cantidad += cantidadBillete10;
        billetesCajero.push(push10);
        cantidadBillete05 = parseInt(prompt("Digite la cantidad de billetes de $5000"));
        push05 = billetesCajero[4].cantidad += cantidadBillete05;
        billetesCajero.push(push05);
        console.log(billetesCajero[0].cantidad, billetesCajero[1].cantidad, billetesCajero[2].cantidad, billetesCajero[3].cantidad, billetesCajero[4].cantidad);
        mult100 = cantidadBillete100 * billetesCajero[0].valor;
        total100 = billetesCajero[0].total += mult100;
        billetesCajero.push(total100);
        mult50 = cantidadBillete50 * billetesCajero[1].valor;
        total50 = billetesCajero[1].total += mult50;
        billetesCajero.push(total50)
        mult20 = cantidadBillete20 * billetesCajero[2].valor;
        total20 = billetesCajero[2].total += mult20;
        billetesCajero.push(total20);
        mult10 = cantidadBillete10 * billetesCajero[3].valor;
        total10 = billetesCajero[3].total += mult10;
        billetesCajero.push(total10);
        mult05 = cantidadBillete05 * billetesCajero[4].valor;
        total05 = billetesCajero[4].total += mult05;
        billetesCajero.push(total05);
        console.log(billetesCajero[0].total, billetesCajero[1].total,billetesCajero[2].total,billetesCajero[3].total,billetesCajero[4].total);
        totalTotal = (billetesCajero[0].total + billetesCajero[1].total + billetesCajero[2].total + billetesCajero[3].total + billetesCajero[4].total);
        console.log(totalTotal);
        
    } else if(questionDocument === cli[0]["documento"]){
        alert("Bienvenido al Panel de cliente.");
        alert("A continuacion, utilize las acciones del Cliente.");
        alert(`Tenemos en disponible ${totalTotal}\n Distribuido en las siguientes denominaciones: \n Billetes de $100.000 ${billetesCajero[0].cantidad} con valor de ${billetesCajero[0].total} \n Billetes de $50.000 ${billetesCajero[1].cantidad} con valor de ${billetesCajero[1].total} \n Billetes de $20.000 ${billetesCajero[2].cantidad} con valor de ${billetesCajero[2].total} \n Billetes de $10.000 ${billetesCajero[3].cantidad} con valor de ${billetesCajero[3].total} \n Billetes de $5.000 ${billetesCajero[4].cantidad} con valor de ${billetesCajero[4].total}`);
        if(totalTotal){
            retiro = parseInt(prompt("Digite la cantidad que desea retirar."));
            console.log(retiro);

            while(totalTotal > 0 && retiro >= 5000){
                let transaccion = false;//mirar bandera funcione
                billetesCajero.forEach((dinero, index) => {
                    if(dinero.denominacion === "100000" && retiro >= dinero.valor && dinero.total > 0 && !transaccion){
                        billetesCliente[index].total = billetesCliente[index] + dinero.valor;
                        billetesCliente[index].cantidad = billetesCliente[index].cantidad + 1;
                        dinero.total = dinero.total - dinero.valor;
                        dinero.cantidad = dinero.cantidad - 1;
                        console.log(dinero.denominacion);
                        transaccion = true;

                        retiro = retiro - dinero.valor;
                        billetesCajero = billetesCajero - dinero.valor;
                    }
                    if(dinero.denominacion === "50000" && retiro >= dinero.valor && dinero.total > 0 && !transaccion){
                        billetesCliente[index].total = billetesCliente[index] + dinero.valor;
                        billetesCliente[index].cantidad = billetesCliente[index].cantidad + 1;
                        dinero.total = dinero.total - dinero.valor;
                        dinero.cantidad = dinero.cantidad - 1;
                        console.log(dinero.denominacion);
                        transaccion = true;

                        retiro = retiro - dinero.valor;
                        billetesCajero = billetesCajero - dinero.valor;
                    }
                    if(dinero.denominacion === "20000" && retiro >= dinero.valor && dinero.total > 0 && !transaccion){
                        billetesCliente[index].total = billetesCliente[index] + dinero.valor;
                        billetesCliente[index].cantidad = billetesCliente[index].cantidad + 1;
                        dinero.total = dinero.total - dinero.valor;
                        dinero.cantidad = dinero.cantidad - 1;
                        console.log(dinero.denominacion);
                        transaccion = true;

                        retiro = retiro - dinero.valor;
                        billetesCajero = billetesCajero - dinero.valor;
                    }
                    if(dinero.denominacion === "10000" && retiro >= dinero.valor && dinero.total > 0 && !transaccion){
                        billetesCliente[index].total = billetesCliente[index] + dinero.valor;
                        billetesCliente[index].cantidad = billetesCliente[index].cantidad + 1;
                        dinero.total = dinero.total - dinero.valor;
                        dinero.cantidad = dinero.cantidad - 1;
                        console.log(dinero.denominacion);
                        transaccion = true;

                        retiro = retiro - dinero.valor;
                        billetesCajero = billetesCajero - dinero.valor;
                    }
                    if(dinero.denominacion === "5000" && retiro >= dinero.valor && dinero.total > 0 && !transaccion){
                        billetesCliente[index].total = billetesCliente[index] + dinero.valor;
                        billetesCliente[index].cantidad = billetesCliente[index].cantidad + 1;
                        dinero.total = dinero.total - dinero.valor;
                        dinero.cantidad = dinero.cantidad - 1;
                        console.log(dinero.denominacion);
                        transaccion = true;

                        retiro = retiro - dinero.valor;
                        billetesCajero = billetesCajero - dinero.valor;
                    
                }});
                if(!transaccion){
                    break;
                }
            }
            let dineroCliente = 0;
            billetesCliente.forEach((dinero) =>{
                dineroCliente = dineroCliente + dinero.total;
            });
            console.log(`Cantidad de dinero que el cajero no entrego: ${retiro}`);
            console.log(`La cantidad de dinero que quedo disponible en el cajero: ${billetesCajero.toLocaleString()}`);
            console.log(`Billetes por denominacion que el cajero entrego al cliente: ${billetesCliente}`);
            console.log(`Total dinero entregado al cliente: ${dineroCliente}`);
        }
    } else {
        alert("Mantenimiento");
    } 
}