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
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Riz cantonais": {
        img : './img/riz_cantonais.png',
        histoire : "Un p'tit riz cantonnais façon estevaninou? C'est partiiiiii", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Chili con carné": {
        img : './img/chili_con_carne.png',
        histoire : "Le chili con carné ! Quel classique mais comment j'ai jamais pris le temps d'en faire, j'attend de voir ce que tu peux me faire de bien bon :)", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    "Soufflé au gruyère et chorizo": {
        img : './img/soufle_gruyere_chorizo.png',
        histoire : "Ahahah un p'tit nouveau, il m'intrigue beaucoup et il serait le bienvenu tu ne pense pas ?", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    'Omelette aux pommes de terre': {
        img : './img/omelette_pommes_de_terre.png',
        histoire : "Je sais que tu n'aimes pas les oeufs sauf ceux de ta mère mais pourquoi pas tenter quelque chose de nouveua éhéh?", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    },
    'Croquettes de thon': {
        img : './img/croquette_de_thon.png',
        histoire : "Alors l'image donne pas tant envie que ça c'est vrai mais bon, j'espère que la recette et le goût de cet essaie culinaire te plaira !!", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
        ]
    }, 
    "Dahl de lentilles corail": {
        img : './img/Dahl_de_lentilles_corail.png',
        histoire : "Classique indémodable", 
        etapes : [
            "étape 1 : ", 
            "étape 2 : ", 
            "étape 3 : ", 
            "étape 4 : ", 
            "étape 5 : ",
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