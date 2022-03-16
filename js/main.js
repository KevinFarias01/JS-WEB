// Teclas Audio Pom 1.0


function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
function tocaSom() {

}



const listaDeTeclas = document.querySelectorAll('.tecla');



let contador = 0;

//enquanto O contador for menor que o tamanho da lista 'length'
while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;

    console.log(contador);
};