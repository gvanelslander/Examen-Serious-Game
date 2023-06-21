var w = 500;
var h = 500;
var n = 50;
var s = w / n;
var player = {
    parts: [
        { X: 1, Y: 0 },
        { X: 0, Y: 0 }
    ]
}
var fps = 10;
var pb = 1;
var min = 0;
var max = n - 1;
var score = 0;
var candy = {
    X: Math.round(Math.random() * max),
    Y: Math.round(Math.random() * max)
}
var can = document.getElementById("First");
can.width = w;
can.height = h;
var ref;
//var ctx = can.getContext("2d");
var speed = {
    X: 1,
    Y: 0
}
setRate(1000);
//setInterval(update,1000/fps);
//QUEL DIRECTION?
document.addEventListener("keydown", f_keydown)
function f_keydown(e) {
    switch (e.keyCode) {
        case 37: //GAUCHE
            speed.X = -1;
            speed.Y = 0;
            break;
        case 38: //HAUT
            speed.Y = -1;
            speed.X = 0;
            break;
        case 39: //DROITE
            speed.X = 1;
            speed.Y = 0;
            break;
        case 40: //BAS
            speed.Y = 1;
            speed.X = 0;
            break;
    }
}

function update() {

    player.parts.unshift({
        X: player.parts[0].X + speed.X * pb,
        Y: player.parts[0].Y + speed.Y * pb
    })
    ctx.clearRect(0, 0, w, h);
    //INIT FOOD
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect(candy.X * s, candy.Y * s, s, s);
    //INIT SERPENT
    ctx.fillStyle = "rgb(0,255,0)";
    var n_parts = player.parts.length;
    for (var i = 0; i < n_parts; i++) {
        var part = player.parts[i];
        ctx.fillRect(part.X * s, part.Y * s, s, s);
    };
    //TELEPORTATION
    if (player.parts[0].X >= n) {
        player.parts[0].X = 0;
    }
    if (player.parts[0].X < 0) {
        player.parts[0].X = n;
    }
    if (player.parts[0].Y >= n) {
        player.parts[0].Y = 0;
    }
    if (player.parts[0].Y < 0) {
        player.parts[0].Y = n;
    }
    //MIAM MIAM MIAM
    if ((candy.X == player.parts[0].X) && (candy.Y == player.parts[0].Y)) {
        console.log("MIAM MiAM");
        candy = {
            X: Math.round(Math.random() * max),
            Y: Math.round(Math.random() * max)
        }
        score = score + 50;
        fps++;
        console.log(fps);
        console.log(score);
    }
    else {
        player.parts.pop();
    }
    //PERDU?
    for (var i = 1; i < player.parts.length; i++) {
        if ((player.parts[0].X == player.parts[i].X) && (player.parts[0].Y == player.parts[i].Y)) {
            console.log(player.parts[0]);
            console.log("PERDU");
            alert("You loose");
        }
    }
    //GRILLE
    /*for(var i=0; i<n; i++){

        for(var j=0; j<n; j++) {

            ctx.beginPath();
            ctx.strokeStyle = "rgb(0,0,255)";
            ctx.moveTo (i*s,j*s);
            ctx.lineTo (i*s,s*(j+1));
            ctx.lineTo (s*(i+1),s*(j+1));
            ctx.lineTo (s*(i+1),s*j);
            ctx.lineTo (i*s,s*j);
            ctx.closePath();
            ctx.stroke();
 
        }
    }*/
}
function setRate(rate) {
    clearInterval(ref);
    ref = setInterval(update, rate / fps);
}

//Changement de page
const levelmax = 15;
let curentlevel = 1;
let succeslevel = 1;
let previous = document.querySelector("#PreviousPage");
let next = document.querySelector("#NextPage");

let allpage = document.querySelectorAll(".Tuto");

allpage.forEach((element) => {
    if (parseInt(element.dataset.pageNumber) == curentlevel) {
        (element.style.display = "block");
        console.log(element.dataset)
    }
    else {
        (element.style.display = "none");
    }

})

previous.addEventListener("click", () => {
    console.log(curentlevel);
    if (curentlevel > 1) {
        curentlevel--;
        changePage();
    }
})

next.addEventListener("click", () => {
    console.log(curentlevel);
    if (curentlevel < levelmax) {
        curentlevel++;
        changePage();
    }
})

function changePage() {
    allpage.forEach((element) => {
        if (parseInt(element.dataset.pageNumber) == curentlevel) {
            (element.style.display = "block");
            console.log(element.dataset)
            appearnextbutton();
            ScrollToTop();
        }
        else {
            (element.style.display = "none");
        }

    })
}

//Vérification level 1
let verif = document.querySelector("#Validation1");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");

let total = 0;

verif.addEventListener("click", () => {

    if (input1.value.toUpperCase() == "ENTIER") {
        total = total + 1;
        input1.style.background = "green";
    }
    else {
        input1.style.background = "red";
    }

    if (input2.value.toUpperCase() == "REEL") {
        total = total + 1;
        input2.style.background = "green";
    }
    else {
        input2.style.background = "red";
    }
    if (input3.value.toUpperCase() == "CAR") {
        total = total + 1;
        input3.style.background = "green";
    }
    else {

        input3.style.background = "red";
    }
    if (input4.value.toUpperCase() == "CHAINE") {
        total = total + 1;
        input4.style.background = "green";
    }
    else {
        input4.style.background = "red";
    }

    if (total != 4) {
        total = 0;
    }
    else {
        succeslevel = 3;
    }
    console.log(total);
    appearnextbutton();
})

//fonction qui sauvergarde les pages reussis et permet d'appuer sur le bouton next
function appearnextbutton() {
    if (succeslevel >= curentlevel) {
        next.style.display = "block";
    }
    else {
        next.style.display = "none";
    }
}
//retour en haut de la page
function ScrollToTop(){
    window.scrollTo(0,0);
}

//Exercice structure lire et ecrire

let verif2 = document.querySelector("#Validation2");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");
let input7 = document.querySelector("#input7");
let input8 = document.querySelector("#input8");
let input9 = document.querySelector("#input9");

verif2.addEventListener("click", () => {
    total = 0;
    if (input5.value.toUpperCase() == "ENTIER") {
        total = total + 1;
        input5.style.background = "green";
    }
    else {
        input5.style.background = "red";
    }

    if (input6.value.toUpperCase() == "ECRIRE") {
        total = total + 1;
        input6.style.background = "green";
    }
    else {
        input6.style.background = "red";
    }

    if (input7.value.toLowerCase() == "a") {
        total = total + 1;
        input7.style.background = "green";
    }
    else {
        input7.style.background = "red";
    }

    if (input8.value.toLowerCase() == "b") {
        total = total + 1;
        input8.style.background = "green";
    }
    else {

        input8.style.background = "red";
    }

    if (input9.value.toLowerCase() == "c") {
        total = total + 1;
        input9.style.background = "green";
    }
    else {
        input9.style.background = "red";
    }

    if (total != 5) {
        total = 0;
    }
    else {
        succeslevel = 5;
    }
    console.log(total);
    appearnextbutton();
})

//Exercice condition SI
let verif3 = document.querySelector("#Validation3");
let input10 = document.querySelector("#input10");
let input11 = document.querySelector("#input11");
let input12 = document.querySelector("#input12");
let input13 = document.querySelector("#input13");
let input14 = document.querySelector("#input14");
let input15 = document.querySelector("#input15");
let input16 = document.querySelector("#input16");

verif3.addEventListener("click", () => {
    console.log("je rentre");
    total = 0;

    if (input10.value.toUpperCase() == "REEL") {
        total = total + 1;
        input10.style.background = "green";
    }
    else {
        input10.style.background = "red";
    }

    if (input11.value.toUpperCase() == "LIRE") {
        total = total + 1;
        input11.style.background = "green";
    }
    else {
        input11.style.background = "red";
    }

    if (input12.value.toLowerCase() == "moyenne") {
        total = total + 1;
        input12.style.background = "green";
    }
    else {
        input12.style.background = "red";
    }

    if (input13.value.toUpperCase() == "ALORS") {
        total = total + 1;
        input13.style.background = "green";
    }
    else {

        input13.style.background = "red";
    }

    if (input14.value.toLowerCase() == "areussi") {
        total = total + 1;
        input14.style.background = "green";
    }
    else {
        input14.style.background = "red";
    }

    if (input15.value.toLowerCase() == "faux") {
        total = total + 1;
        input15.style.background = "green";
    }
    else {
        input15.style.background = "red";
    }

    if (input16.value.toUpperCase() == "FINSI") {
        total = total + 1;
        input16.style.background = "green";
    }
    else {
        input16.style.background = "red";
    }

    if (total != 7) {
        total = 0;
    }
    else {
        succeslevel = 7;
    }
    console.log(total);
    appearnextbutton();
})

//Exercice condition CAS PARMI
let verif4 = document.querySelector("#Validation4");
let input17 = document.querySelector("#input17");
let input18 = document.querySelector("#input18");
let input19 = document.querySelector("#input19");
let input20 = document.querySelector("#input20");
let input21 = document.querySelector("#input21");
let input22 = document.querySelector("#input22");

verif4.addEventListener("click", () => {
    total = 0;

    if (input17.value.toUpperCase() == "VAR") {
        total = total + 1;
        input17.style.background = "green";
    }
    else {
        input17.style.background = "red";
    }

    if (input18.value.toUpperCase() == "CHAINE") {
        total = total + 1;
        input18.style.background = "green";
    }
    else {
        input18.style.background = "red";
    }

    if (input19.value.toLowerCase() == "couleur") {
        total = total + 1;
        input19.style.background = "green";
    }
    else {
        input19.style.background = "red";
    }

    if (input20.value.toUpperCase() == "PARMI") {
        total = total + 1;
        input20.style.background = "green";
    }
    else {

        input20.style.background = "red";
    }

    if (input21.value.toUpperCase() == "DEFAUT") {
        total = total + 1;
        input21.style.background = "green";
    }
    else {
        input21.style.background = "red";
    }

    if (input22.value.toUpperCase() == "FIN") {
        total = total + 1;
        input22.style.background = "green";
    }
    else {
        input22.style.background = "red";
    }

    if (total != 6) {
        total = 0;
    }
    else {
        succeslevel = 9;
    }
    console.log(total);
    appearnextbutton();
})

//Exercice boucle POUR
let verif5 = document.querySelector("#Validation5");
let input23 = document.querySelector("#input23");
let input24 = document.querySelector("#input24");
let input25 = document.querySelector("#input25");
let input26 = document.querySelector("#input26");
let input27 = document.querySelector("#input27");
let input28 = document.querySelector("#input28");

verif5.addEventListener("click", () => {
    total = 0;

    if (input23.value.toLowerCase() == "i") {
        total = total + 1;
        input23.style.background = "green";
    }
    else {
        input23.style.background = "red";
    }

    if (input24.value.toUpperCase() == "DEBUT") {
        total = total + 1;
        input24.style.background = "green";
    }
    else {
        input24.style.background = "red";
    }

    if (input25.value.toUpperCase() == "DE") {
        total = total + 1;
        input25.style.background = "green";
    }
    else {
        input25.style.background = "red";
    }

    if (input26.value.toUpperCase() == "FAIRE") {
        total = total + 1;
        input26.style.background = "green";
    }
    else {

        input26.style.background = "red";
    }

    if (input27.value.toLowerCase() == "total") {
        total = total + 1;
        input27.style.background = "green";
    }
    else {
        input27.style.background = "red";
    }

    if (input28.value.toUpperCase() == "FINPOUR") {
        total = total + 1;
        input28.style.background = "green";
    }
    else {
        input28.style.background = "red";
    }

    if (total != 6) {
        total = 0;
    }
    else {
        succeslevel = 11;
    }
    console.log(total);
    appearnextbutton();
})

//Exercice boucle TANTQUE
let verif6 = document.querySelector("#Validation6");
let input29 = document.querySelector("#input29");
let input30 = document.querySelector("#input30");
let input31 = document.querySelector("#input31");
let input32 = document.querySelector("#input32");
let input33 = document.querySelector("#input33");
let input34 = document.querySelector("#input34");
let input35 = document.querySelector("#input35");
let input36 = document.querySelector("#input36");

verif6.addEventListener("click", () => {
    total = 0;

    if (input29.value.toUpperCase() == "BOOL") {
        total = total + 1;
        input29.style.background = "green";
    }
    else {
        input29.style.background = "red";
    }

    if (input30.value.toUpperCase() == "TANTQUE") {
        total = total + 1;
        input30.style.background = "green";
    }
    else {
        input30.style.background = "red";
    }

    if (input31.value.toLowerCase() == "win") {
        total = total + 1;
        input31.style.background = "green";
    }
    else {
        input31.style.background = "red";
    }

    if (input32.value.toUpperCase() == "SI") {
        total = total + 1;
        input32.style.background = "green";
    }
    else {

        input32.style.background = "red";
    }

    if (input33.value.toUpperCase() == "ALORS") {
        total = total + 1;
        input33.style.background = "green";
    }
    else {
        input33.style.background = "red";
    }

    if (input34.value.toLowerCase() == "vrai") {
        total = total + 1;
        input34.style.background = "green";
    }
    else {
        input34.style.background = "red";
    }

    if (input35.value.toUpperCase() == "SINON") {
        total = total + 1;
        input35.style.background = "green";
    }
    else {
        input35.style.background = "red";
    }

    if (input36.value.toUpperCase() == "FINTANTQUE") {
        total = total + 1;
        input36.style.background = "green";
    }
    else {
        input36.style.background = "red";
    }

    if (total != 8) {
        total = 0;
    }
    else {
        succeslevel = 13;
    }
    console.log(total);
    appearnextbutton();
})