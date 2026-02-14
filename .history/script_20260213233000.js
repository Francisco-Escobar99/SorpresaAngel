const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

let cartaAbierta = false;
let cartaLeida = false;

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } 
    else if (e.target.matches(".envelope *")) {

        // 🔹 ABRIR CARTA
        if (!letter.classList.contains('opened')) {

            cartaAbierta = true; // se abrió

            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);

            envelope.classList.add("disable-envelope");

        } 
        // 🔹 CERRAR CARTA
        else {

            if(cartaAbierta){
                cartaLeida = true; // ya fue abierta y cerrada
            }

            letter.classList.add('closing-letter');
            envelope.classList.remove("disable-envelope");

            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }
});

function mostrarFoto(){

    if(!cartaLeida){
        alert("Primero abre la carta y léela ✉️");
        return;
    }

    document.getElementById("modalFoto").classList.add("activo");
}

function cerrarFoto(){
    document.getElementById("modalFoto").classList.remove("activo");
}
