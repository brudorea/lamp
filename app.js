/**
 * Simples simulador de uma lâmpada
 * @author Bruno Henrique
 */

// Variáveis de apoio lógico
let chave = false // o interruptor inicia desligado
let lampada = true // a lâmpada está OK


function quebrar() {
    if (lampada === true)
        document.getElementById('lamp').src = "img/broken.jpg"
    //reproduzindo um arquivo de áudio no JS
    //Passo 1: copiar o arquivo de áudio para o projeto
    //Passo 2: usar a classe Audio (biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    // apoio a lógica para oJS identificar a lâmpada quebrada
    lampada = false
 
}
 
function onoff() {
    if (chave === false && lampada === true) {
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // O JS agora sabe que a chave está ligada
        //acender a lâmpada
        document.getElementById('lamp').src = "img/on.jpg"
    } else if (lampada === true) {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false
        //desligar a lâmpada
        document.getElementById('lamp').src = "img/off.jpg"
    }
}