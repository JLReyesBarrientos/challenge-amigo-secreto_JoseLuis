    // Array de lista de amigos 
    let amigos = [];
       
    //Funcion para Agregar amigo
    function agregarAmigo(){ 
    //Boton para la funcion de agregar amigo      
    let input = document.getElementById('amigo'); 
        if (input.value === ''){//Condicion de que no este vacia la entrada 
        alert("Por favor, inserte un nombre.");
        return;

    } else if (/\d/.test(input.value)) {//Condicion de que no se ingrese un numero
        alert("Eso es un numero, Por favor inserte un nombre.");
    limpiarCaja(); //Funcion de limpiar la caja 
    return;

    } else if (input.value.trim().split(' ').length > 1) {//Condicion de no agregar 2 nombres
        alert("Por favor, inserte solo un nombre.");
    limpiarCaja(); //Funcion de limpiar la caja 
    return;
    }   
    amigos.push(input.value);//Funcion de agregar los los amigos al array 

    limpiarCaja();//Funcion de limpiar la caja

    actualizarListaAmigos();// Funcion de actualizar la lista 
    }

    //Funcion para Limpiar la caja del input
    function limpiarCaja(){
        document.getElementById('amigo').value = '';
    }
    //Funcion para actualizar la Lista de Amigos 
    function actualizarListaAmigos() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = " ";
    //Bucle para repetir el proceso del agregado de de Amigos, y formando la lista 
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos [i];
        lista.appendChild(li);
    }
    }
    //Funcion para Sortear amigo             
    function sortearAmigo(){
        //Boton para la funcion de sortear
        let resultado = document.getElementById('resultado');
        //Formula para sortear amigo
        let amigoSorteado = Math.floor(Math.random()* amigos.length);
        let amigoSecreto = amigos[amigoSorteado];
        //Mostar resultado del sorteo
        resultado.innerHTML = `Tu amigo secreto es ${amigoSecreto} `
}
    