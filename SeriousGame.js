var can = document.getElementById("First");
//Changement de page
const levelmax = 22;
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
function verifinputupper(input, string, total){
    if (input.value.toUpperCase() == string) {
        total = total + 1;
        input.style.background = "green";
    }
    else {
        input.style.background = "red";
    }
    return total;
}

function verifinputlower(input, string, total){
    if (input.value.toLowerCase() == string) {
        total = total + 1;
        input.style.background = "green";
    }
    else {
        input.style.background = "red";
    }
    return total;
}
//Vérification level 1
let verif = document.querySelector("#Validation1");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");

let total = 0;

verif.addEventListener("click", () => {

    total = verifinputupper(input1, "ENTIER", total);
    total = verifinputupper(input2, "REEL", total);
    total = verifinputupper(input3, "CAR", total);
    total = verifinputupper(input4, "CHAINE", total);

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
    total = verifinputupper(input5, "ENTIER", total);
    total = verifinputupper(input6, "ECRIRE", total);
    total = verifinputlower(input7, "a", total);
    total = verifinputlower(input8, "b", total);
    total = verifinputlower(input9, "c", total);


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
    total = 0;
    total = verifinputupper(input10, "REEL", total);
    total = verifinputupper(input11, "LIRE", total);
    total = verifinputlower(input12, "moyenne", total);
    total = verifinputupper(input13, "ALORS", total);
    total = verifinputlower(input14, "areussi", total);
    total = verifinputlower(input15, "faux", total);
    total = verifinputupper(input16, "FINSI", total);
    

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
    total = verifinputupper(input17, "VAR", total);
    total = verifinputupper(input18, "CHAINE", total);
    total = verifinputlower(input19, "couleur", total);
    total = verifinputupper(input20, "PARMI", total);
    total = verifinputupper(input21, "DEFAUT", total);
    total = verifinputupper(input22, "FIN", total);

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
    total = verifinputlower(input23, "i", total);
    total = verifinputupper(input24, "DEBUT", total);
    total = verifinputupper(input25, "DE", total);
    total = verifinputupper(input26, "FAIRE", total);
    total = verifinputlower(input27, "total", total);
    total = verifinputupper(input28, "FINPOUR", total);
    
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
    total = verifinputupper(input29, "BOOL", total);
    total = verifinputupper(input30, "TANTQUE", total);
    total = verifinputlower(input31, "win", total);
    total = verifinputupper(input32, "SI", total);
    total = verifinputupper(input33, "ALORS", total);
    total = verifinputlower(input34, "vrai", total);
    total = verifinputupper(input35, "SINON", total);
    total = verifinputupper(input36, "FINTANTQUE", total);
    
    if (total != 8) {
        total = 0;
    }
    else {
        succeslevel = 12;
    }
    console.log(total);
    appearnextbutton();
})

//Snake creation de la carte
let verif7 = document.querySelector("#Validation7");
let input37 = document.querySelector("#input37");
let input38 = document.querySelector("#input38");
let input39 = document.querySelector("#input39");
let input40 = document.querySelector("#input40");
let input41 = document.querySelector("#input41");
let input42 = document.querySelector("#input42");
let input43 = document.querySelector("#input43");

verif7.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input37, "ENTIER", total);
    total = verifinputupper(input38, "POUR", total);
    total = verifinputupper(input39, "A", total);
    total = verifinputupper(input40, "DE", total);
    total = verifinputupper(input41, "FAIRE", total);
    total = verifinputlower(input42, "map", total);
    total = verifinputupper(input43, "FINPOUR", total);
   
    if (total != 7) {
        total = 0;
    }
    else {
        succeslevel = 13;
    }
    console.log(total);
    appearnextbutton();
})

//Affichage de la map
let verif8 = document.querySelector("#Validation8");
let input44 = document.querySelector("#input44");
let input45 = document.querySelector("#input45");
let input46 = document.querySelector("#input46");
let input47 = document.querySelector("#input47");
let input48 = document.querySelector("#input48");
let input49 = document.querySelector("#input49");
let input50 = document.querySelector("#input50");
let input51 = document.querySelector("#input51");
let input52 = document.querySelector("#input52");
let input53 = document.querySelector("#input53");
let planquer = document.querySelector(".planquer");

verif8.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input44, "TABLEAU", total);
    total = verifinputupper(input45, "POUR", total);
    total = verifinputupper(input46, "DE", total);
    total = verifinputupper(input47, "A", total);
    total = verifinputupper(input48, "FAIRE", total);
    total = verifinputupper(input49, "POUR", total);
    total = verifinputupper(input50, "DE", total);
    total = verifinputupper(input51, "A", total);
    total = verifinputupper(input52, "FAIRE", total);
    total = verifinputupper(input53, "ECRIREALALIGNE", total);
    
    if (total != 10) {
        total = 0;
    }
    else {
        succeslevel = 14;
        planquer.classList.remove("planquer");
    }
    console.log(total);
    appearnextbutton();
})

//Creation du serpent et intégration dans la map
let verif9 = document.querySelector("#Validation9");
let input54 = document.querySelector("#input54");
let input55 = document.querySelector("#input55");
let input56 = document.querySelector("#input56");
let input57 = document.querySelector("#input57");
let input58 = document.querySelector("#input58");
let input59 = document.querySelector("#input59");
let input60 = document.querySelector("#input60");

verif9.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input54, "CAR", total);
    total = verifinputupper(input55, "TANTQUE", total);
    total = verifinputupper(input56, "ALORS", total);
    total = verifinputupper(input57, "FINTANTQUE", total);
    total = verifinputupper(input58, "TANTQUE", total);
    total = verifinputupper(input59, "ALORS", total);
    total = verifinputupper(input60, "FINTANTQUE", total);
    
    if (total != 7) {
        total = 0;
    }
    else {
        succeslevel = 15;
        partie = 1;
    }
    console.log(total);
    appearnextbutton();
})

//Mouvement
let verif10 = document.querySelector("#Validation10");
let input61 = document.querySelector("#input61");
let input62 = document.querySelector("#input62");
let input63 = document.querySelector("#input63");
let input64 = document.querySelector("#input64");
let input65 = document.querySelector("#input65");
let input66 = document.querySelector("#input66");

verif10.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input61, "CAS", total);
    total = verifinputupper(input62, "PARMI", total);
    total = verifinputupper(input63, "FINCASPARMI", total);
    total = verifinputupper(input64, "TANTQUE", total);
    total = verifinputlower(input65, "direction_y", total);
    total = verifinputupper(input66, "FINTANTQUE", total);
    
    if (total != 6) {
        total = 0;
    }
    else {
        succeslevel = 16;
        partie = 2;
    }
    console.log(total);
    appearnextbutton();
})

//teleportation
let verif11 = document.querySelector("#Validation11");
let input67 = document.querySelector("#input67");
let input68 = document.querySelector("#input68");
let input69 = document.querySelector("#input69");
let input70 = document.querySelector("#input70");
let input71 = document.querySelector("#input71");

verif11.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input67, "CONST", total);
    total = verifinputupper(input68, "HAUTEUR", total);
    total = verifinputupper(input69, "ALORS", total);
    total = verifinputlower(input70, "serpent.posy", total);
    total = verifinputupper(input71, "FINSI", total);
    
    if (total != 5) {
        total = 0;
    }
    else {
        succeslevel = 17;
        partie = 3;
    }
    console.log(total);
    appearnextbutton();
})

//apparition nourriture
let verif12 = document.querySelector("#Validation12");
let input72 = document.querySelector("#input72");
let input73 = document.querySelector("#input73");
let input74 = document.querySelector("#input74");
let input75 = document.querySelector("#input75");
let input76 = document.querySelector("#input76");

verif12.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input72, "CLASSE", total);
    total = verifinputupper(input73, "ALEA", total);
    total = verifinputupper(input74, "ALEA", total);
    total = verifinputlower(input75, "map", total);
    total = verifinputupper(input76, "FIN", total);
    
    if (total != 5) {
        total = 0;
    }
    else {
        succeslevel = 18;
        partie = 4;
    }
    console.log(total);
    appearnextbutton();
})

let verif13 = document.querySelector("#Validation13");
let input77 = document.querySelector("#input77");
let input78 = document.querySelector("#input78");
let input79 = document.querySelector("#input79");
let input80 = document.querySelector("#input80");
let input81 = document.querySelector("#input81");

verif13.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input77, "SI", total);
    total = verifinputupper(input78, "ALORS", total);
    total = verifinputupper(input79, "ALEA", total);
    total = verifinputupper(input80, "ALEA", total);
    total = verifinputupper(input81, "FINSI", total);
    
    if (total != 5) {
        total = 0;
    }
    else {
        succeslevel = 19;
        partie = 5;
    }
    console.log(total);
    appearnextbutton();
})

let verif14 = document.querySelector("#Validation14");
let input82 = document.querySelector("#input82");
let input83 = document.querySelector("#input83");
let input84 = document.querySelector("#input84");
let input85 = document.querySelector("#input85");
let input86 = document.querySelector("#input86");
let input87 = document.querySelector("#input87");

verif14.addEventListener("click", () => {
    total = 0;
    total = verifinputupper(input82, "POUR", total);
    total = verifinputupper(input83, "A", total);
    total = verifinputupper(input84, "SI", total);
    total = verifinputupper(input85, "ALORS", total);
    total = verifinputupper(input86, "FINSI", total);
    total = verifinputupper(input87, "FINPOUR", total);
    
    if (total != 6) {
        total = 0;
    }
    else {
        succeslevel = 20;
        partie = 6;
    }
    console.log(total);
    appearnextbutton();
})

//Le snake
var w = 500;
var h = 500;
var n = 50;
var s = w / n;
var player = {
    parts: [
        { X: 25, Y: 25 }
    ]
}
var fps = 10;
var partie = 0;
var pb = 1;
var min = 0;
var max = n - 1;
var score = 0;
var candy = {
    X: Math.round(Math.random() * max),
    Y: Math.round(Math.random() * max)
}
can.width = w;
can.height = h;
var ref;
var ctx = can.getContext("2d");
var speed = {
    X: 1,
    Y: 0
}
setRate(1000);
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
function initfood(){
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect(candy.X * s, candy.Y * s, s, s); 
}

function initserpent(){
    ctx.fillStyle = "rgb(0,255,0)";
    var n_parts = player.parts.length;
    for (var i = 0; i < n_parts; i++) {
        var part = player.parts[i];
        ctx.fillRect(part.X * s, part.Y * s, s, s);
    };
}

function teleportation(){
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
}

function Miam(){
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
}

function loose(){
    for (var i = 1; i < player.parts.length; i++) {
        if ((player.parts[0].X == player.parts[i].X) && (player.parts[0].Y == player.parts[i].Y)) {
            console.log(player.parts[0]);
            console.log("PERDU");
            alert("You loose");
        }
    }
}
function move(){
    player.parts.unshift({
        X: player.parts[0].X + speed.X * pb,
        Y: player.parts[0].Y + speed.Y * pb
    })
}
function update() {

    ctx.clearRect(0, 0, w, h);
    if (partie >= 2){
        move();
        if (partie < 5){
            player.parts.pop();
        }
    }
    
    //INIT FOOD
    if (partie >= 4){
        initfood();
    }
    //INIT SERPENT
    if (partie >= 1){
        initserpent();
    }
    //TELEPORTATION
    if (partie >= 3){
        teleportation();
    }
    //MIAM MIAM MIAM
    if(partie >= 5){
        Miam();
    }
    //PERDU?
    if(partie >= 6){
        loose();
    }
}
function setRate(rate) {
    clearInterval(ref);
    ref = setInterval(update, rate / fps);
}