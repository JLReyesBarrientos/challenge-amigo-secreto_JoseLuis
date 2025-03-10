   
    let amigos = [];
    let input = document.getElementById('amigo');
                
    function agregarAmigo(){
        if (input.value === ''){
        alert("Por favor, inserte un nombre.");
        return;
    }  if (/\d/.test(input.value)) {
        alert("Eso es un numero, Por favor inserte un nombre.");
    limpiarCaja();
    return;
    }  if (input.value.trim().split(' ').length > 1) {
        alert("Por favor, inserte solo un nombre.");
    limpiarCaja();
    return;
    }   
    amigos.push(input.value);
    limpiarCaja();
    actualizarListaAmigos();
                    
    }
    function limpiarCaja(){
        document.getElementById('amigo').value = '';
    }
    function actualizarListaAmigos() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = " ";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos [i];
        lista.appendChild(li);
    }
    }
                
    function sortearAmigo(){
        let resultado = document.getElementById('resultado');
        let amigoSorteado = Math.floor(Math.random()* amigos.length);
        let amigoSecreto = amigos[amigoSorteado];
        resultado.innerHTML = `Tu amigo secreto es ${amigoSecreto} `
}
    