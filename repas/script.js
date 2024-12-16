// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}


let liste_plat = [
    "Hachis parmentier traditionnel", 
    "Riz cantonais", 
    "Chili con carné", 
    "Soufflé au gruyère et chorizo", 
    'Omelette aux pommes de terre', 
    'Croquettes de thon', 
    "Dahl de lentilles corail", 
    "Tartiflette", 
    "Chakchouka", 
    "Salade de lentille au chèvre frais", 
    "Wrap au poulet", 
    "Pâtes bolognaises", 
    "Riz poulet curry", 
    "Fajitas", 
    "Boulettes de kefta à la marocaine",
    "Mac&Cheese",
    "Pastilla",
    "Croziflette", 
    "Poulet Maroilles"
]
var bdd = {
    "Hachis parmentier traditionnel": {
        img : './img/hachis_parmentier.png',
        histoire : "Ahhhh le Hachis, c'est bon un petit hachis hein ! Bon allez on s'attaque à la recête ! ", 
        etapes : [
            "Peler et couper les pommes de terre en gros morceaux puis les faire cuire 20 minutes dans une casserole d'eau bouillante salée.",
            "Pendant ce temps, éplucher et découper la carotte en morceaux. Peler l'oignon et l'ail, émincer l'oignon et couper la gousse d'ail en deux. Effeuiller les branches de thym. Faire chauffer le lait dans une petite casserole.",
            "Egoutter et écraser les pommes de terre en purée. Ajouter le lait chaud en remuant et 30g de beurre, saler, poivrer et mélanger.",
            "Préchauffer le four à 180°C. Mixer le thym, le persil, la carotte, l'ail et l'oignon. Faire revenir le tout dans une sauteuse avec le beurre restant pendant 3 minutes. Ajouter la viande hachée, saler, poivrer et laisser cuire 3 minutes.",
            "Verser 10cl d'eau et le cube de bouillon de boeuf dans la sauteuse. Cuire encore 12 minutes en remuant régulièrement.",
            "Répartir la viande dans un plat allant au four puis ajouter la purée par-dessus. Enfourner pour 20 minutes. Déguster chaud ", 
        ]
    },
    "Riz cantonais": {
        img : './img/riz_cantonais.png',
        histoire : "Un p'tit riz cantonnais façon estevaninou? C'est partiiiiii", 
        etapes : [
            "Préparer une casserole avec un fond d'huile. Casser 2 oeufs dans un bol et remuer avec une fourchette", 
            "Ajouter le riz dans la casserole, mettre le feu le plus fort possible et faire revenir le riz dans la casserole jusqu'à ce que certains grains deviennent blanc.", 
            "Mettre 2 fois le volume de riz en eau dans la casserole, puis couvrir. Mettre un peu d'huile dans une grande poelle et faire chauffer les oeufs et casser en même temps l'omelette en pleins de petits morceaux", 
            "Arrêter le feu de la casserole mais laisser dessus. Ajouter dans la poelle du bacon coupé en lamelles, le faire revenir puis ajouter les petits poids après les avoirs égoutés", 
            "Normalement tout est presque bon, il ne te reste plus qu'à mettre directement le riz (que tu ne dois donc pas égouter) dans la poelle",
        ]
    },
    "Chili con carné": {
        img : './img/chili_con_carne.png',
        histoire : "Le chili con carné ! Quel classique mais comment j'ai jamais pris le temps d'en faire, j'attend de voir ce que tu peux me faire de bien bon :)", 
        etapes : [
            "Préchauffer le four à 180°C (thermostat 6).", 
            "Hacher l'oignon et l'ail.",
            "Dans une cocotte en fonte, faire fondre le beurre, et ensuite dorer doucement l'oignon et l'ail.", 
            "Incorporer le boeuf haché et laisser cuire doucement 10 min.", 
            "Mélanger le chili, le cumin, le concentré de tomates, et incorporer le tout au boeuf. Ajouter les haricots, le bouillon, du sel et du poivre.",
            "Couvrir et cuire 25 min au four."
        ]
    },
    "Soufflé au gruyère et chorizo": {
        img : './img/soufle_gruyere_chorizo.png',
        histoire : "Ahahah un p'tit nouveau, il m'intrigue beaucoup et il serait le bienvenu tu ne pense pas ?", 
        etapes : [
            "Émincez le chorizo en fines lamelles. Portez le lait à ébullition avec une pointe de sel puis réservez. Cassez les oeufs et séparez les blancs des jaunes.", 
            "Faites fondre le beurre dans une grande casserole, ajoutez la maizena et faites cuire pendant 2 min environ en mélangeant jusqu'à ce que le mélange commence tout juste à jaunir.",
            "Versez alors doucement le lait en fouettant vigoureusement et faites cuire, en mélangeant toujours au fouet jusqu'à ce que le mélange épaississe. Puis retirez du feu et incorporez, un à un, les jaunes d'oeufs; ajoutez le chorizo et réservez à chaleur ambiante.", 
            "Préchauffez le four th.6 (180°c).", 
            "Montez les blancs en neige très ferme avec une pointe de sel puis incorporez-les délicatement au mélange au Chorizo.", 
            "Farinez le fond et les parois des ramequins individuels jusqu'à l'extrême bord, remplissez-les de l'appareil à soufflé jusqu'aux bords puis enfournez pour 15 min de cuisson sans ouvrir le four. Servez aussitôt",
        ]
    },
    'Omelette aux pommes de terre': {
        img : './img/omelette_pommes_de_terre.png',
        histoire : "Je sais que tu n'aimes pas les oeufs sauf ceux de ta mère mais pourquoi pas tenter quelque chose de nouveua éhéh?", 
        etapes : [
            "Elle arrive plus tard", 
            "Oui bon je sais que tu en rêves mais plus tard j'ai dis !", 
            "Punaise je savais pas t'étais autant à fond x)", 
            "Tu forces la mdrrr", 
            "NOONNNN",
        ]
    },
    'Croquettes de thon': {
        img : './img/croquette_de_thon.png',
        histoire : "Alors l'image donne pas tant envie que ça c'est vrai mais bon, j'espère que la recette et le goût de cet essaie culinaire te plaira !!", 
        etapes : [
            "Égouttez et émiettez le thon dans un grand saladier. Ajoutez les 2 œufs entiers.", 
            "Mélangez. Ajoutez tout le reste des ingrédients. Mélangez.", 
            "Faites chauffer une grande poêle anti adhésive avec de l'huile d'olive.", 
            "Formez des petites boules de pâtes et disposez les dans votre poêle bien chaude, écrasez-les pour former des croquettes.", 
            "Laissez bien cuire sur chaque face, de sorte que les croquettes croustillent bien des deux côtés.",
        ]
    }, 
    "Dahl de lentilles corail": {
        img : './img/Dahl_de_lentilles_corail.png',
        histoire : "Classique indémodable", 
        etapes : [
            "Laver les tomates et les découper en dés. Peler les carottes, et les découper en fines rondelles", 
            "Dans une casserole, verser les lentilles corail et couvrir d'eau. Porter à ébullition. Laisser cuire pendant 10 min environ, jusqu'à complète absorption de l'eau. Retire du feu et laisser reposer", 
            "Dans une sauteuse, verser l'huile et chauffer. Y ajouter l'ail qui dorera pendant une petite minute. Verser ensuite les légumes et saupoudrer avec les épices. Ajouter enfin le concentré de tomate", 
            "Verser le lait de coco et laisser mijoter environ 10 min. sans couvrir.", 
            "Enfin, ajouter les lentilles et bien remuer le tout.",
        ]
    }, 
    "Tartiflette": {
        img : './img/tartiflette.png',
        histoire : "J'espère que tu tombes sur ce plat en hiver parce que si on est en été oulala l'estomac...", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Chakchouka": {
        img : './img/chakchouka.png',
        histoire : "Ce plat me fait de l'oeil pas toi ? Ce serait idéal que tu me montres tes talents de cuisinière en me le préparant (je suis sûr que ça ne peut pas être loupé)", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    }, 
    "Salade de lentille au chèvre frais": {
        img : './img/salade_lentille_chevre_frais.png',
        histoire : "Ahhhh, moi et le chèvre frais une grande histoire d'amour n'est-ce pas ? J'espère te convaincre avec ce plat ! ", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    }, 
    "Wrap au poulet": {
        img : './img/wrap_poulet.png',
        histoire : 'Classique indémodable', 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    }, 
    "Pâtes bolognaises": {
        img : './img/pate_bolo.png',
        histoire : 'Classique indémodable', 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Riz poulet curry": {
        img : './img/riz_curry.png',
        histoire : 'Classique indémodable', 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    }, 
    "Fajitas": {
        img : './img/fajitas.png',
        histoire : 'Classique indémodable', 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Boulettes de kefta à la marocaine": {
        img : './img/Kefta.png',
        histoire : "On m'a dit que c'était vraiment un bon repas, à voir ce qu'on en pense mais je suis sûr qu'ils peuvent nous convaincres ces marocains", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Mac&Cheese": {
        img : './img/macandcheese.png',
        histoire : "Apparement simple et efficace mais bon !", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Pastilla" : {
        img : './img/pastilla.png',
        histoire : "Ahahah à nous de trouver de nouvelles recettes après que ma soeur ai eut l'idée d'innover dans ce repas du domaine.", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Croziflette" : {
        img : './img/croziflette.png',
        histoire : "Eté ? Hiver ? Qu'on ne me parle pas de saison pour manger une croziflette", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    }, 
    "Poulet Maroilles" : {
        img : './img/poulet maroille.png',
        histoire : "Le fameux... Poulet au maroille alalala quel filou celui là, on l'aime mais on le regrette", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    }
}

let choix = ""

function random_plat() {
let fleche_apparition = document.getElementById('casse_la_tete');
fleche_apparition.classList.remove('w3-hide')
/** On choisit d'abord un plat random dans tout ceux qui nous sont proposés **/
let nb_plat = liste_plat.length;
/**alert(nb_plat);**/
let ind_plat_du_jour = Math.floor(Math.random() * nb_plat);
/**alert(ind_plat_du_jour);**/
let plat_du_jour = liste_plat[ind_plat_du_jour];
/**alert(plat_du_jour);**/

/** On modifie tous les élements (étape, image, titre)**/
let img = bdd[plat_du_jour]['img'];
let histoire = bdd[plat_du_jour]['histoire'];
let etapes = bdd[plat_du_jour]['etapes'];

let imaage = document.getElementById("imaaaage");
let brillle = document.getElementById('brillance');
brillle.classList.remove('brillant');
imaage.src = img;
let titre = document.getElementById('titre');
titre.innerHTML = plat_du_jour;
let etape = document.getElementById('etape');
etape.innerHTML = histoire
}



function chgmt_etape(etape_a_laquelle_on_passe) {
var recette = document.getElementById('titre').textContent;
var etape = document.getElementById('etape');
if (etape_a_laquelle_on_passe - 1 < 0) {
    var txt_etape = bdd[recette]['histoire'];
    etape.innerHTML = txt_etape;
} else {
    var txt_etape = bdd[recette]['etapes'][etape_a_laquelle_on_passe-1];
    etape.innerHTML = txt_etape;
}
const all_element = document.querySelectorAll('.btnsupprrr');
all_element.forEach(element => {
    element.classList.add('w3-hide');
});
const elementToShow = document.querySelectorAll(".etape"+etape_a_laquelle_on_passe);
elementToShow.forEach(element => {
    element.classList.remove('w3-hide');
});
}