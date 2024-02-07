function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// Modal Image Gallery
function onClick(element) {
document.getElementById("img01").src = element.src;
document.getElementById("modal01").style.display = "block";
var captionText = document.getElementById("caption");
captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

function bruhstop() {
    alert(`Si tu as trouvé ça, reload la page (pour enlever tous les sons en cours) et je te donne la consigne suivante : Lettres en gras = lettre d'un mot à trouver à la fin`)
    for( player in window._V_.players ) {
        window._V_.players[player].pause();
    }
}

function bruh() {
    const a = ['./img/effect1.mp3', './img/effect2.mp3', './img/effect3.mp3', './img/effect4.mp3', './img/effect5.mp3' ]
    const b = getRandomInt(a.length)
    new Audio(a[b]).play()
    const c = ['Peut-être si tu réessayes', 'Haha...', 'Try again...', 'Tu touches au but non ?', 'Hummmm tu y es presque', 'Enfait jen sais rien si tu es proches', 'Peut-être il y a des infos', 'A ta place je re essayerais', 'Ou peut-être jabandonnerai parceque je suis casse couille', 'Après tout cest drole non?', 'Je ne peux pas mettre d apostrophe, je parle ton langage du coup' , 'En vrai essaye peut-être de te mettre en mode paysage sur le site, je pense ça peut taider', 'Tu tournes en rond?', 'Jespère tu as eu lindice de cet easter-egg', 'Sinon tu te tapes tous les vieux sons pouris eheh', 'Jsuis un génie ah oui?', 'Honnêtement il est pas si dur à trouver cet easter-egg']
    const d = getRandomInt(c.length)
    alert(c[d])
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

