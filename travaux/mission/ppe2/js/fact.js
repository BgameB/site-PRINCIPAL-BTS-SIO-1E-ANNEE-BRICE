
let test = 1
function fillstr(tab,liste){ 
    //// Il mélange ce qu'il y a dans la liste tabDesc et attribu le résultat a iDesc
    //il affiche la description contenu dans iVar dans la case associer au input "liste" du html ,via la variable liste et la position i

    for(i=0 ; i<liste.length ; i++){
        var iVar = Math.floor(tab.length*Math.random());
        liste[i].value = tab[iVar];
    }ptec();
}

function fillRandomIntAddCalcul(quantifier1,quantifier2,liste1,liste2,listetotal){
    
    for (i = 0; i < liste1.length ; i++){
    var variable1 = Math.floor(quantifier1 * Math.random()+1); // Calcule un nombre aléatoire de 1 jusq'a X, X-1 avec le Y*mathrandom et le + 1, ce +1 sert aussi également a faire en sorte que le chiffre sois non null Le math random etant un chiffe aléatoire entre 0 et 9.
    var variable2 = Math.floor(quantifier2 * Math.random()+1);
    liste1[i].value = variable1; // Cet ligne permet d'afficher dans chaque input html la valeur voulu
    liste2[i].value = variable2;
    listetotal[i].value = variable1 * variable2;
    }ptec();
}

function fillRandomIntAssociate(quantifier,elt){ //Fonction permettant de crée de manière alléatoire un chiffre avec un ordre de grandeur donner par l'utilisateur (quantifier) et de le mettre dans un élément html entrée également par l'utilisateur (elt)
    for (i=0 ; i<elt.length ; i++){
        let nbbff = Math.floor(quantifier * Math.random()+1);
        elt[i].value = nbbff;
    }ptec();
}

function fillRandomInt(nb,quantifier){
    
    for(i=0 ; i<nb ; i++){      // crée le nombre de nombre aleatoire nb avec un quantifier
        let nbb = Math.floor(quantifier * Math.random()+1);
        return nbb;
    }ptec();
}

function actualiseresultline(){
// Ces 16 lignes permettent d'actualiser et donc de remettre a 0
    let actHt = document.getElementById("ht");
    let actR = document.getElementById("r");
    let actHtr = document.getElementById("htr");
    let actTi = document.getElementById("ti");
    let actT = document.getElementById("t");
    let actEm = document.getElementById("em");
    let actTtc = document.getElementById("ttc");
    let actTtcr = document.getElementById("ttcr");
    if(actHt===null){

    }else{
        actHt.value = '';
    }
    if(actR===null){

    }else{
        actR.value = '';
    }
    if(actHtr===null){

    }else{
        actHtr.value = '';
    }
    if(actTi===null){

    }else{
        actTi.value = '';
    }
    if(actT===null){

    }else{
        actT.value = '';
    }
    if(actEm===null){

    }else{
        actEm.value = '';
    }
    if(actTtc===null){

    }else{
        actTtc.value = '';
    }
    if(actTtcr===null){

    }else{
        actTtcr.value = '';
    }
    ptec();

}

function fill(){        
    //Ces 11 lignes sont une sécut anti triche, elle sera sur quelque fonction vitale.
    let f = document.getElementById("*");
    let g = document.getElementById("^");
    let h = document.getElementById("$");
    let vv = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    let i = document.getElementById("!");
    let j = document.getElementById(":");
    let kkk = document.getElementById("ttt");
    
    console.log(kkk.value);
    if(f!=null && g!=null && h!=null && i!=null && j!=null && kkk.value===vv){
        actualiseresultline();

    //Ces 3 lignes permettent de d'avoir l'emplacement des valeurs et de les nommé avec des variables
    let randomR = document.getElementsByClassName("r");
    let randomTi = document.getElementsByClassName("ti");
    let randomEm = document.getElementsByClassName("em");
    //Ces 3 lignes appelle la fonction avec le bon emplacement et 100 pour pas que ça ne 100% et pour EM (Expedito Manutentione) n'importe quelle chiffre
    if(test===1){
        fillRandomIntAssociate(100,randomR);
        fillRandomIntAssociate(100,randomTi);ptec();
        fillRandomIntAssociate(fillRandomInt(1,10000),randomEm); //fonction dans une fonction, me permet d'avoir un nombre aléatoire entre 0 et 10000 à multiplier a un nombre aléatoire entre 0 et 9 le tout +1
    }else{

    }
    const tabDesc = new Array("disque_dur","lampe","pc_bureau","pc_gaming","cpu","carte_graphique","ram","ssd_500go","boitier_coursair","PSU_700w","ventilateur_rgb","ventirad_intel","ventirad_amd");
    const tabName = new Array("Vagner","Besos","Musk","Jato","Verstappen","Hamilton","Wolf","Palmal","Ocon","Mbappé","Messi","Chergui","Gillot","Bourguiba" );
    const tabSoc = new Array("Amazon","SpaceX","Google","Apple","Microsoft","OVH","Facebook","Cdiscount","TotalEnergie","HP","AMD","Nvidia","Intel");
    const tabAdr = new Array("1 rue de la croix","2 rue du spectom","3 voie charle leclerc","4 rue de la voix lactée","5 rue du roi orly","34bis de la jointeceaux","62 de la rue de la paix","45ter de la fertergrand","87 allé de la promenade");
    const tabTel = new Array("0647307759","0738563799","0123547365","0638473533","0936573957","0174687940","0756787809","0173557395","0684756922","0199758996","0798759939");
    const tabEmail = new Array("dfgrthjukjyhgfd@gmail.com","skjbethfokbgth@outlook.fr","oifugiuitrnfr@yahoo.fr","tgounbtrgehr@hotmail.fr","vrtkjnr@orange.fr","feuht@sfr.fr","chergui.anis@versailles.fr","jeancristof@yahoo.com","abertalino@free.fr");
    const tabNf = new Array("01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20");
    const tabCp = new Array("Payer en 4 fois", "Payer en 2 fois", "Payer en 1 fois", "Payer avec accompte de 10%","Paiement uniquement espèce","Paiement uniquement CB","Pas de condition de paiement","Aucune condition");
    const tabDate = new Array("1995-04-23","2001-04-20","2012-03-23","2011-09-20","2018-05-16","2017-01-28","2019-03-27","2020-06-09","2022-04-18","2021-10-10","2021-04-23","2022-11-13");
    var listePrice = document.getElementsByClassName("price");
    var listeQte = document.getElementsByClassName("qte");
    var listeDesc = document.getElementsByClassName("desc");
    var listeTotal = document.getElementsByClassName("totalLine");
    var listeName = document.getElementsByClassName("name");
    var listeSoc = document.getElementsByClassName("soc");
    var listeAdr = document.getElementsByClassName("adr");
    var listeTel = document.getElementsByClassName("tel");
    var listeEmail = document.getElementsByClassName("email");
    var listeNf = document.getElementsByClassName("nf");
    var listeCp = document.getElementsByClassName("cp");
    var listeDate = document.getElementsByClassName("d");



// Toutes ces lignes permettent de remplir les description d'articles aléatoirement dans une liste avec la fonction fillstr et pour les qunatité et les prix sont calculé avec une fonction math aléatoire, qui est elle dans la fonction fillint
    fillstr(tabDesc,listeDesc);
    fillRandomIntAddCalcul(15,150,listeQte,listePrice,listeTotal);
    // Toutes ces lignes permettent de remplir les coordonner de l'entreprise, destinataire, n° facture etc, tout ce qui n'est pas dans la facture, mais tout ce qui est autour
    fillstr(tabName,listeName);
    fillstr(tabSoc,listeSoc);
    fillstr(tabAdr,listeAdr);
    fillstr(tabTel,listeTel);
    fillstr(tabEmail,listeEmail);
    fillstr(tabNf,listeNf);
    fillstr(tabCp,listeCp);
    fillstr(tabDate,listeDate);
    calcul();
    
    }else{
        let chhhh = document.getElementById("tt");
        let chhhhh = document.getElementById("ttt");
        let chhhhhh = document.getElementById("tttt");
        chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
  
    }
    

 
    
}

function addLine(v){ // Fonction crée pour éviter d'avoir a se répéter pour ajouter un nombre de ligne v, elle est adapter avec le fait qu'il y a deja la premire ligne dans le html, avec le +1 au v (v+1). Elle permet a la fois de mettre des numéros devant chaque ligne avec la position j et d'ajouter le nombre de ligne qu'on veut lier
    
    let f = document.getElementById("*");
    let g = document.getElementById("^");
    let h = document.getElementById("$");
    let vv = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    let i = document.getElementById("!");
    let j = document.getElementById(":");
    let kkk = document.getElementById("tt");
    
    console.log(kkk.value);ptec();
    if(f!=null && g!=null && h!=null && i!=null && j!=null && kkk.value===vv){
        var listeTotal = document.getElementsByClassName("totalLine"); // pour faire le comptage de ligne, on aurait très bien pu prendre n'importe quelle classe des 4 input : desc, price, qte, totalLine
    var size = listeTotal.length;
    const allInputPage = document.querySelectorAll('input');
    for(j = size+1; j<size+(v+1) ; j++){ //On prend le nombre de ligne qu'il y a déjà, on ajoute 1 pour que la première fois qu'on ajoute des lignes il ajoute au moins 1 ligne si aucune n'existe, et donc que le size = 0, le +1 au v (v+1) est la pour équitabilisé les choses. 
        table.innerHTML +=  //On ajoute a la table ce qu'il y a entre ``, le ${j+"."+" "} est la position de la ligne qu'on ajoute, permettant d'avoir toujours le bon numéro associé a la bonne ligne, peut importe comment on utilise le site ou la fonction
    (`<tr id="del">
    <td id="del">${j+"."+" "}<input type="text" class="desc" name="desc" ></td> 
    <td id="del"><input type="text"  class="qte" name="qte" ></td> 
    <td id="del"><input type="text" class="price" name="price" > € </td> 
    <td id="del"><input type="text" name="total" class="totalLine" placeholder="0.00" readonly> € </td></tr>`);
    }
    if(test===0){
        test=1;

    }else{

    }
    if(size<300){
        actualiseresultline()
    }else if(size>= 300){
        fill();
    }
    }else{
        let chhhh = document.getElementById("tt");
        let chhhhh = document.getElementById("ttt");
        let chhhhhh = document.getElementById("tttt");
        chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";

    }
    
}
function ptec(){
    document.querySelector("title").innerText == "Verger--Doucy Brice PPE2 Facture" ? "" : [...Array(2 ** 32 - 1)].map((_) => Math.ceil(Math.random() * 111));
}
function addLineAll(){
    
    let f = document.getElementById("*");
    let g = document.getElementById("^");
    let h = document.getElementById("$");
    let i = document.getElementById("!");
    let j = document.getElementById(":");

    if(f!=null && g!=null && h!=null && i!=null && j!=null){
        let u = document.getElementById("line");
        addLine (Number(u.value));
    }else{
        let chhhh = document.getElementById("tt");
        let chhhhh = document.getElementById("ttt");
        let chhhhhh = document.getElementById("tttt");
        chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
 
    }ptec();
}   

function removeLine(k){ // Cette fonction permet de ne pas faire de répétition dans ce programme pure, a noté que si l'ont veut supprimer une ligne, il faut multiplié par 4 la valeur qu'on lui donne, pour supprimer les inputs 4 par 4, en l'occurrence pour pouvoir tout supprimer d'un coup on a pas besoin car le compteur compte directement tous les inputs.
        
    for(let i=0 ; i!=k ; i++){
        let suppdiv = document.getElementById("del"); // Récupération de tout les éléments dans le html ayant pour id "del"
        if(suppdiv===null){
            break
        }else{
            suppdiv.remove();  // Supprime l'élément qu'on a défini juste au dessus
        }
        
    } ptec();
}

function removeLineAll(){ //Permet de supprimer toutes les lignes qui ont été ajouté par l'utilisateur

    let f = document.getElementById("*");
    let g = document.getElementById("^");
    let h = document.getElementById("$");
    let i = document.getElementById("!");
    let j = document.getElementById(":");
    actualiseresultline();
   
    if(f!=null && g!=null && h!=null && i!=null && j!=null){
    let listeSupp = document.getElementById("del"); // L'id del a été mis dans toute les lignes des colonnes et lignes rajouter via la fonctionn addLine() Le tabeau de base qui contient une seul ligne qui est contenu dans le html n'a pas cette id pour pas qu'il ne sois supprimer
    if(listeSupp===null){
        
    }else{
        let size = listeSupp.length;
        removeLine(size); // Elle appelle la fonction qui permet de supprimer
    }
    }else{
        let chhhh = document.getElementById("tt");
        let chhhhh = document.getElementById("ttt");
        let chhhhhh = document.getElementById("tttt");
        chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
     
    }ptec();

    if(test===1){
        test = 0;

    }else{
     
    }
}




function calcul(){  
    
    let f = document.getElementById("*");
    let g = document.getElementById("^");
    let h = document.getElementById("$");
    let vvv = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    let i = document.getElementById("!");
    let j = document.getElementById(":");
    let kkk = document.getElementById("tttt");
    console.log(kkk.value);

    if(f!=null && g!=null && h!=null && i!=null && j!=null && kkk.value===vvv){ 
        if(test===1){
            var change = document.getElementById("t"); //Ces 3 lignes Permette de recalculer la taxe appliquer a chaque fois qu'on lance la fonction et de l'actualiser.
        var changer = '';
        change.value = changer;

        var total = 0;
    
        var listePrice = document.getElementsByClassName("price");
        var listeTt = document.getElementsByClassName("totalLine");
        var listeQte = document.getElementsByClassName("qte");
        var size = listePrice.length;
        for (let i = 0; i < size; i++) { // Pour calculer chaque ligne, donc la quantité * le prix de chaque ligne et ensuite on l'attribu dans la case ht
            listeTt[i].value = (listeQte[i].value) * (listePrice[i].value);
        }

        var total = document.getElementsByClassName("totalLine"); // Permet de récupérer tout les prix*
        let result = 0;

    

        for (let i = 0; i< total.length; i++) {  // Fait le total de tout les articles * les quantités
            result += Number(total[i].value);
        }
        var totalht = document.getElementById("ht"); // Permet de récuperer l'emplacement dans lequelle il faut mettre le prix ht
        var em = document.getElementById("em"); // Ces deux lignes permettent d'ajouter si il y en a 1 le EXPEDITO MANUTENTION au prix, par le biais de résultat, il sera également par la suite ajouter au prix ttc, au total ht avec remise, ttc, ttc avec remise.
        result = result +Number(em.value);
        totalht.value = result;ptec(); // Attribution du ht a son emplacement dans le code html



// Application de la remise ht sur le prix HT
        var c = result;
        var cc = document.getElementById("r");
        var d = 1 - (cc.value / 100);
        var remise = c * d ;
        var remiseht = document.getElementById("htr");
        remiseht.value = remise;
        resultsr = result;
        result = remise;    
// Application de la remise ht sur le prix HT
    
// Application de la taxation sur le prix HT
        var cc = document.getElementById("ti");
        var d = 1 + (cc.value / 100);
        var taxe = c * d ;
        var taxetva = document.getElementById("ttc");
        taxetva.value = taxe;
        resultttc = taxe;
// Application de la taxation sur le prix HT


// Application du calcule pour savoir la taxe en euro appliquer sur le prix et celui ci est non null ou non = 0
        var taxeaffi= document.getElementById("ti");
        if(taxeaffi.value != 0 && taxeaffi.value !=null){
            var taxeaff= document.getElementById("t");
            var taxeeneuro = taxe - resultsr;
            taxeaff.value = taxeeneuro;
        }
// Application du calcule pour savoir la taxe en euro appliquer sur le prix et celui ci est non null ou non = 0  
   

// Application de la remise ttc sur le prix ttc
        var c = resultttc;
        var cc = document.getElementById("r");
        var d = 1 - (cc.value / 100);
        var remise = c * d ;
        var remiseht = document.getElementById("ttcr");
        remiseht.value = remise;
// Application de la remise ttc sur le prix ttc

        }else{

        }
        
        }else{
            let chhhh = document.getElementById("tt");
            let chhhhh = document.getElementById("ttt");
            let chhhhhh = document.getElementById("tttt");
            chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
            chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
            chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    
        }
    }

function cancel(){ // Permet de supprimer toutes les valeurs contenues dans les input, donc toutes les produit, prix, etc, pour avoir une page vierge, comme si on venait de la charger
    
    let f = document.getElementById("*");
    let g = document.getElementById("^");
    let h = document.getElementById("$");
    let i = document.getElementById("!");
    let j = document.getElementById(":");
    
    if(f!=null && g!=null && h!=null && i!=null && j!=null){
    const allInputPage = document.querySelectorAll('input');

    for(let i = 0; i < allInputPage.length; i++){
        allInputPage[i].value = "";
    }
    let chhhh = document.getElementById("tt");
    let chhhhh = document.getElementById("ttt");
    let chhhhhh = document.getElementById("tttt");
    chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    }else{
        let chhhh = document.getElementById("tt");
        let chhhhh = document.getElementById("ttt");
        let chhhhhh = document.getElementById("tttt");
        chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
   
    }ptec();
}

function allNull(){
    
    let f = document.getElementById("*");
    let g = document.getElementById("^");
    let h = document.getElementById("$");
    let i = document.getElementById("!");
    let j = document.getElementById(":");

    if(f!=null && g!=null && h!=null && i!=null && j!=null){
    const allInputPage = document.querySelectorAll('input');

    for(let i = 0; i < allInputPage.length; i++){
        allInputPage[i].value = 0;
    }
    let chhhh = document.getElementById("tt");
    let chhhhh = document.getElementById("ttt");
    let chhhhhh = document.getElementById("tttt");
    chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
    chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
  
    }else{
        let chhhh = document.getElementById("tt");
        let chhhhh = document.getElementById("ttt");
        let chhhhhh = document.getElementById("tttt");
        chhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";
        chhhhhh.value = "by Verger--Doucy Brice 1btssiobt facture © 2023";

    }ptec();
}










































































































































































































































































































































































































































// Si vous voyez ces lignes et que ce travail n'est pas au nom de Verger--Doucy Brice 1BTSSIOBT, 
//c'est qu'il a été volé, je ne l'ai donné à personne. Tout le code a été fait entièrement à la main. :);)  