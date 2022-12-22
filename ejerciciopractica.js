const users = [
    {  id : 1,
       name : "Brian",
       age : 20,
       typeUser : "ADMINISTRADOR".toLowerCase(),
       password : "12345", 
       email : "brian@gmail.com"
    },

    {  id : 2,
        name : "Maria",
        age : 23,
        typeUser : "ADMINISTRADOR".toLowerCase(),
        password : "456", 
        email : "maria@gmail.com"
    },

    {  id : 3,
        name : "Jorge",
        age : 19,
        typeUser : "CLIENTE".toLowerCase(),
        password : "6789",
        email : "jorge@gmail.com" 
    }
]

const registrer = () => {
    const quesEmail =  prompt("Por favor, ingrese su Email");
    const quesPass = prompt("Por favor, ingrese su Password");
    const name = prompt("Por favor, ingrese su Nombre");
    const ageString = prompt("Ingrese su edad");

    const ageInt = parseInt(ageString);
    const id = users.length+1;

    
    const newUser ={
        id,
        name,
        ageInt,
        quesEmail,
        quesPass,
        };
    
        for(const key in newUser){
            const propertyValue = newUser[key];
            console.log(key);
            console.log(propertyValue);
            if(!propertyValue){
                console.log(`El valor de la propiedad ${key} es un String vacio.`);
            }
            if(key === "age"){
                const ageStr = prompt(`Por favor ingrese su ${key}`);
                newUser[key] = parseInt(ageStr);
                while(!newUser[key]){
                    newUser[key] = prompt(`Por favor ingrese su ${key}`);
                }
            } else{
                newUser[key] = prompt(`Por favor ingrese su ${key}`);
                while(!newUser[key]){
                    newUser[key] = prompt(`Por favor ingrese su ${key}`);
                }
            }
        }
        console.log(newUser);
        users.push(newUser);
        console.log(users);
}

let quesEmail = prompt("Por favor ingrese su Documento de identidad. ");
let quesPass = prompt("Por favor ingrese su Password. ");

console.log(quesEmail);
console.log(quesPass);

const userFound = users.find(user => user.email === quesEmail);//No tendremos control de cual de los dos fallo.
console.log(userFound);

let intentosPermitidos = 3;
if(userFound){

    /* if(userFound.password === quesPass){
        alert("Password es correcta.");
    }else{
        alert("Password incorrecta.");
    } */
    //---------------------------------------------------------------------->
    /* let intentosPermitidos = 3
    while(!intentosPermitidos){
        break
    } */
    while(userFound.password !== quesPass && intentosPermitidos){
        quesPass = prompt("Por favor ingrese la contrasena correcta.");
        intentosPermitidos--;
    }
    if(!intentosPermitidos){
        alert("Contrasena errada, ignrese nuevamente.");
    }
    if(userFound.password === quesPass){
        alert("Bienvenido, Ha iniciado Sesion!");
    }
} else{
    const userResponse = confirm("Sr. Usuario, si desea crear una nueva CUENTA haga clic en ACEPTAR o si prefiere seguir intentando iniciar sesion, haga clic en CANCELAR");
            if(userResponse){
                registrer();
            }
}

//Funcion que permita registrar nuevo usuario.

iniciarSesion();

const iniciarSesion = () => {
    console.log("Has iniciado Sesion");
}



