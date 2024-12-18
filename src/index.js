let nomesHerois = ["Thor", "Iron Man", "Hulk", "Black Widow", "Captain America"];
let xpsHerois = [7500, 1500, 8500, 300, 12000];
let i = 0;

while (i < nomesHerois.length) {
    let nomeHeroi = nomesHerois[i];
    let xpHeroi = xpsHerois[i];
    let nivelHeroi;

    if (xpHeroi < 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    i++;
}

do {
    let nomeHeroi = nomesHerois[i - 1];
    let xpHeroi = xpsHerois[i - 1];
    console.log("Reprocessando o Herói: " + nomeHeroi + " com XP: " + xpHeroi);
    i--;
} while (i > 0);

for (let j = 0; j < nomesHerois.length; j++) {
    let nomeHeroi = nomesHerois[j];
    console.log("Confirmado: O Herói " + nomeHeroi + " foi classificado com sucesso.");
}

switch (xpsHerois[0]) {
    case 7500:
        console.log("O XP do herói Thor está no intervalo de Ouro.");
        break;
    default:
        console.log("O XP não foi reconhecido.");
        break;
}
