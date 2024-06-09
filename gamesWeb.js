
   // Seleciona o canvas e o contexto 2D
const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

// Carrega a imagem da nave
const nave = new Image();
nave.src = "img/nave.png";
nave.onload = function() {
    xNave = canvas.width / 2 - nave.width / 2;
    yNave = canvas.height - nave.height;
    ctx.drawImage(nave, xNave, yNave);
}

// Carrega a imagem do inimigo
const inimigo = new Image();
inimigo.src = "img/inimigo.png";
inimigo.onload = function() {
    xInimigo = canvas.width / 2 - nave.width / 2;
    yInimigo = 0;
    ctx.drawImage(inimigo, xInimigo, yInimigo);
}

// Função para verificar colisão
function colidiu() {
    var largura = nave.width;
    var altura = nave.height;
    return (xNave + largura) > xInimigo &&
           xNave < (xInimigo + largura) &&
           (yNave + altura) > yInimigo &&
           yNave < (yInimigo + altura);
}

// Função para movimentar a nave e o inimigo
function movimentaNaveInimigo(tecla) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Movimentação da nave
    if (tecla == "ArrowLeft") {
        xNave -= 50;
        xNave = Math.max(0, xNave);
    } else if (tecla == "ArrowRight") {
        xNave += 50;
        xNave = Math.min(canvas.width - nave.width, xNave);
    } else if (tecla == "ArrowUp") {
        yNave -= 50;
        yNave = Math.max(0, yNave);
    } else if (tecla == "ArrowDown") {
        yNave += 50;
        yNave = Math.min(canvas.height - nave.height, yNave);
    }

    // Movimentação do inimigo
    if (tecla == "a") {
        xInimigo -= 50;
        xInimigo = Math.max(0, xInimigo);
    } else if (tecla == "d") {
        xInimigo += 50;
        xInimigo = Math.min(canvas.width - inimigo.width, xInimigo);
    } else if (tecla == "w") {
        yInimigo -= 50;
        yInimigo = Math.max(0, yInimigo);
    } else if (tecla == "s") {
        yInimigo += 50;
        yInimigo = Math.min(canvas.height - inimigo.height, yInimigo);
    }

    // Redesenha as imagens
    ctx.drawImage(nave, xNave, yNave);
    ctx.drawImage(inimigo, xInimigo, yInimigo);

    // Verifica colisão
    if (colidiu()) {
        alert("Chocou uma com a outra!");
    }
}

// Adiciona evento de teclado
document.addEventListener("keydown", function(evento) {
    movimentaNaveInimigo(evento.key);
});
