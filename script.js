var setadireita = window.document.getElementById("setadireita");
var setaesquerda = window.document.getElementById("setaesquerda");
var Robotica = window.document.getElementById("Robotica");
var Diagnostico = window.document.getElementById("Diagnostico");


function DeslizarParaDireita() {
    Diagnostico.style = "display:none"
    Robotica.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top = 50px"
}

function DeslizarParaEsquerda() {
    Diagnostico.style = "display:flex"
    Robotica.style = "display:none"
    setadireita.style = "display:flex; margin-top =50px"
    setaesquerda.style = "display:none"
}