var poeme = document.getElementById('poeme').textContent;
var compteur = document.getElementById('compteur');
compteur.innerHTML = poeme.length;

var legumes = ["patate", "carotte", "aubergine", "haricot", "courgette","citrouille", "salade","lentilles","poivron","chou-fleur", "betterave"];

console.log(legumes[0]);
console.log(legumes[10]);

if (compteur.innerHTML > 3000) {
    console.log("C'est supérieure à 3000 mots");
}else {
    console.log("Le nombre de mots est infèrieure à 3000");
}




