/**
 * Simples simulador de uma lâmpada
 * @author Bruno Henrique
 */

function quebrar() {
    
    // Reproduzindo um arquivo de água no JS
    // Passo 1: copiar o arquivo de áudio para o projeto
    // Passo 2: usar a classe áudio (biblioteca interna do JS)
    let som = new Audio()
    som.src ="sound/glassbreaking.wav"
    som.play()
    document.getElementById(`lamp`).src="img/broken.jpg"
}