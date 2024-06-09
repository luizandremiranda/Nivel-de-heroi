let Nome = ""
let xp = 0
let classificação = ""

nome = prompt ("Digite o nome do héroi")
xp = parseInt(prompt ("Quanto de experiencia o herói tem?"));
if (xp < 1000 && xp <= 0) {
classificação = Bronze
}
else if (xp >=1001 && xp <=5000){
    classificação = "Prata"
}
else if (xp >=5001 && xp <=7000){
    classificaçãocl
     = "Ouro"
}
else if (xp >= 7001 && xp <=8000){
    classificação = "Platina"
}
else if (xp >=8001 && xp <= 9000){
    classificação = "Ascendente"
}
else if (xp >= 9001 && xp <= 10000){
    classificação = "Imortal"
}
else if (xp>= 10001){
    classificação = Radiante
}

else {"O herói " + nome + "está fora da classificação"}
console.log (nome + " está no nivel " + classificação)

