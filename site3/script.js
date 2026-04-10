function answer(choice) {
    if (choice === 'sim') {
        document.getElementById('result').innerHTML = "eu te amo dms meu amor, nos vamos casar e ter dois filhinhos";
    } else {
        moveButtonRandomly();
    }
}

function moveButtonRandomly() {
    const button = document.getElementById('noButton');
    const container = document.getElementById('container');
    const maxX = container.offsetWidth - button.offsetWidth;
    const maxY = container.offsetHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

    // Adiciona um pequeno efeito de transição ao mover
    button.style.transition = "all 0.5s ease-in-out";
}