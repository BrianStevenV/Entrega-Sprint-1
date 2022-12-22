let intentosPermitidos = 3;
if(userFound){
    while(userFound.password !== quesPass && intentosPermitidos){

        quesPass = prompt("Ingrese su password correctamente.");
        intentosPermitidos--;
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
        // ---------------------------------------------------------------------->
        /* while(userFound.password !== quesPass){
            quesPass = prompt("Por favor ingrese la contrasena correcta.");
            intentosPermitidos--;
        } */
        if(!intentosPermitidos){
            alert("Contrasena es errada, no puede seguir intentando");
        }
        if(userFound.password === quesPass){
            alert("Bienvenido, ha iniciado sesion!");
        }
        else{
            const userResponse = confirm("Sr. Usuario, si desea crear una nueva CUENTA haga clic en ACEPTAR o si prefiere seguir intentando iniciar sesion, haga clic en CANCELAR");
            if(userResponse){
                quesEmail = prompt("Por favor, ingrese su Email");
                quesPass = prompt("Por favor, ingrese su Password");
                const name = prompt("Por favor, ingrese su Nombre");
                const id = users.length+1;
    
                const newUser ={
                    id,
                    name,
                    age : 20,
                    email,
                    password,
                };
    
                console.log(newUser);
            }
        }
    } 
}