let nome = ""
let xp = 0
let classificacao = ""

nome = prompt("Digite o nome do héroi")
xp = parseInt(prompt("Quanto de experiencia o herói tem?"));
if (xp < 1000 && xp <= 0) {
classificacao = Bronze
}
else if (xp >=1001 && xp <=5000){
    classificacao = "Prata"
}
else if (xp >=5001 && xp <=7000){
    classificacao = "Ouro"
}
else if (xp >= 7001 && xp <=8000){
    classificacao = "Platina"
}
else if (xp >=8001 && xp <= 9000){
    classificacao = "Ascendente"
}
else if (xp >= 9001 && xp <= 10000){
    classificacao = "Imortal"
}
else if (xp>= 10001){
    classificacao = "Radiante"
}
console.log ("O herói " + nome + " está na classificação " + classificacao)