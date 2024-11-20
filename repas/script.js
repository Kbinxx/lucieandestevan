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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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
        histoire : 'aaaaaaa', 
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