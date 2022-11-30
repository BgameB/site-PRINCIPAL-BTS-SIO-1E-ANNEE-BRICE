function calcul_moyenne(){
    var n1= prompt("Donner la première note: ");
    var n2= prompt("Donner la deuxième note");
    var n3= prompt("Donner la troisième note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+ "<br>");
    var moyenne= somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10)
    document.write("Vous êtes redoublant");
    else
    document.write("Vous êtes Admis");
}

function test_age(){
    let age = prompt('Quelle est votre age ?')
    if(age < 18){
        document.write("Vous etes mineur")
        document.bgColor="red"
    }
    else{
        document.write("Vous etes majeur")
        document.bgColor="green"
    }
}

function simple_affichage(){
    let name = prompt('Donner votre Prénom')
    let familyName = prompt('Donner votre Nom')

    document.write('<div style="margin:auto; width:300px; border:2px solid blue; ">')
    document.write(`Bonjour ${name} ${familyName}`)
    document.write('</div>')
}

function test_couleur(){
    let c = prompt("Donner une couleur")
    if(c == "rouge" || c == "ROUGE" || c == "R"){
        document.body.style.background = "red"
    }
    else if (c == "bleu" || c == "Bleu" || c == "B"){
        document.body.style.background = "blue"
    }
    else{
        document.write("Couleur non comprise")
    }
}

function permute(){
    var v3 = "";
    a = document.getElementById.t1.value;
    b = document.getElementById.t2.value;
    V3 = a;
    a = b;
    b = v3;

    t1.value = a;
    t2.value = b;
}

function addition(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)+Number(b);

    t3.value = c;
}

function multiplication(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)*Number(b);

    t3.value = c;
}

function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)/Number(b);

    t3.value = c;
}

function soustraction(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)-Number(b);

    t3.value = c;
}

function permute(){
    var v3 = "";
    a = document.getElementById("t1").value;
    b = document.getElementById("t2").value;
    v3 = a;
    a = b;
    b = v3;

    t1.value = a;
    t2.value = b;
}

function parite(){
    var v;
    v = Number(document.getElementById("t3").value);
    if (v%2==0)
    t4.value = ("Pair")
    else
    t4.value = ("Impair")
}