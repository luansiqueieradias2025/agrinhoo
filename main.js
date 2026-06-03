// Função para mostrar ou esconder o texto de detalhes dos cards
function toggleInfo(idCard) {
    // Captura o elemento de texto baseado no ID passado
    const elementoInfo = document.getElementById('info-' + idCard);
    
    // Verifica se a classe 'visivel' está presente
    if (elementoInfo.classList.contains('visivel')) {
        elementoInfo.classList.remove('visivel'); // Se estiver visível, esconde
    } else {
        elementoInfo.classList.add('visivel'); // Se estiver escondido, mostra
    }
}