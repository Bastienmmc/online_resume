"use strict"
/**
 * Convertit une unité en une autre possible
 *
 * @param {number} nombre a convertir
 * @param {number} résultat de la conversion
 * @see https://fr.wikipedia.org/wiki/Alphabet_fran%C3%A7ais
 * @author Bastien et Christine
 */
function calcul_conversion() {
    
    resume = document.getElementById('resume');
    // récupération valeur a convertir:
    let valeur_a_convertir = document.getElementById("input_number_area").value;

    //console.log(valeur_a_convertir);

    // récupération nombre de décimal
    let valeur_decimal = document.getElementById("input_decimal_area").value;

    // récupération unités de mesure :
    let unite_depart = document.getElementById("input_unit_select").value;
    // unit_cible contient la valeur de l'unité en toute lettre
    let unite_cible = document.getElementById("output_unit_select").value;

    // récupération zone affichage résultats de conversion
    let valeur_convertie = document.getElementById("result");
    let formule_convertie = document.getElementById("formule");

    let message = document.getElementById("error");

valeur_convertie.innerHTML = '';
formule_convertie.innerHTML = '';

    // Variables utilisées dans les fonctions de calcul //
    //--------------------------------------------------//

    var tab = ""; // tableau contenant libelle unite 
    var indice = 0; // indice pour recherche libelle unité dans tab
    var position = ""; // position valeur cible recherchée

    var tableau_unite_reduit; // gestion libelle reduit
    var unite_cible_reduit;

    var tableau_unite; //tableau contenant les valeurs de conversion

    var valeur_conversion; // valeur de conversion trouvé

    var resultat_calcul; // resultat conversion


    // verification unité selectionner :
    if (unite_depart == "" || unite_cible == "") {
        message.innerHTML = "Veuillez selectionner les unités.";
        resume.textContent = '';
        return message;
    }

    // vérification nombre saisie :
    if (isNaN(parseInt(valeur_a_convertir))) {
        message.innerHTML = "Veuillez saisir un nombre.";
        resume.textContent = '';
        return message;
    }

    // vérification validite unite de mesure :
    if (unite_depart === unite_cible) {
        message.innerHTML = "Veuillez selectionner des unités différentes.";
        resume.textContent = '';
        return message;
    }

    // vérification valeur_a_convertir :
    if (valeur_a_convertir == 0) {
        message.innerHTML = "Veuillez saisir une valeur à convertir.";
        resume.textContent = '';
        return message;
    }

    if ((unite_depart == 'Kelvin') && (valeur_a_convertir < -273.15)) {
         message.innerHTML = "Veuillez saisir une valeur supérieure à -273.15K.";
        resume.textContent = '';
        return message;
    }

    if ((unite_depart == 'Fahrenheit') && (valeur_a_convertir < -459,67)) {
        message.innerHTML = "Veuillez saisir une valeur supérieure à −459,67 °F.";
        resume.textContent = '';
        return message;
    }

    // recherche valeur de conversion par catégorie :

    // test mesure de masse :
    tab = unite_masse_libelle.split("|");
    indice = tab.indexOf(unite_depart);

    if (indice >= 0 && indice <= 4) {
        calcul_masse(unite_cible, unite_depart, valeur_a_convertir, valeur_decimal, valeur_convertie, formule_convertie);
    } else {
        // test si mesure de longueur :
        tab = unite_longueur_libelle.split("|");
        indice = tab.indexOf(unite_depart);
        if (indice >= 0 && indice <=11) {
            calcul_longueur(unite_cible, unite_depart, valeur_a_convertir, valeur_decimal, valeur_convertie, formule_convertie);
        } else {
            calcul_temperature(unite_cible, unite_depart, valeur_a_convertir, valeur_decimal, valeur_convertie, formule_convertie);
        }

    }

    // CONVERSION MASSE  -----------------------------------------------------------------//


    function calcul_masse(unite_cible, unite_depart, valeur_a_convertir, valeur_decimal, valeur_convertie, formule_convertie) {

        // lancement traitement
        // récupération taux de conversion :
        position = "";

        switch (unite_cible) {
            case "Milligramme":
                position = 0;
                break;
            case "Gramme":
                position = 1;
                break;
            case "Kilogramme":
                position = 2;
                break;
            case "Tonne":
                position = 3;
                break;
        }

        // récupération de l'unité cible en libellé réduit:

        // on transforme la chaine de caractère unite en tableau:
        tableau_unite_reduit = unite_masse.split("|");

        // on récupére le libellé rèduit à la position définie
        unite_cible_reduit = tableau_unite_reduit[position];

        // unité de départ :
        // on remplit le tableau contenant les valeurs de conversion correspondant à l'unité de départ
        tableau_unite = "";

        switch (unite_depart) {
            case "Milligramme":
                tableau_unite = Milligramme.split("|");
                break;
            case "Gramme":
                tableau_unite = Gramme.split("|");
                break;
            case "Kilogramme":
                tableau_unite = Kilogramme.split("|");
                break;
            case "Tonne":
                tableau_unite = Tonne.split("|");
                break;
        }

        valeur_conversion = tableau_unite[position];

        // calcul final :

        resultat_calcul = calcul_final(valeur_a_convertir, valeur_conversion, valeur_decimal);

        // Affichage résultat:

        // valeur_convertie.innerHTML = ` ${valeur_a_convertir} en ${unite_depart}  vaut ${resultat_calcul} en ${unite_cible}.`;
        valeur_convertie.innerHTML = `${resultat_calcul} ${unite_cible_reduit}`;

        formule_convertie.innerHTML = `La formule utilisée est  ${valeur_a_convertir} * ${valeur_conversion}`;


    }


    // CONVERSION LONGUEUR  -----------------------------------------------------------------//


    function calcul_longueur(unite_cible, unite_depart, valeur_a_convertir, valeur_decimal, valeur_convertie, formule_convertie) {

        // lancement traitement
        // récupération taux de conversion :
        position = "";

        switch (unite_cible) {
            case "Millimétre":
                position = 0;
                break;
            case "Centimétre":
                position = 1;
                break;
            case "Métre":
                position = 2;
                break;
            case "Kilométre":
                position = 3;
                break;
            case "Yard":
                position = 4;
                break;
            case "Pied":
                position = 5;
                break;
            case "Pouce":
                position = 6;
                break;
            case "Toise":
                position = 7;
                break;
            case "Aune":
                position = 8;
                break;
            case "Parsec":
                position = 9;
                break;
            case "Anneelumiere":
                position = 10;
                break;

        }

        // récupération de l'unité cible en libellé réduit:

        // on transforme la chaine de caractère unite en tableau:
        tableau_unite_reduit = unite_longueur.split("|");

        // on récupére le libellé rèduit à la position définie
        unite_cible_reduit = tableau_unite_reduit[position];

        // unité de départ :
        // on remplit le tableau contenant les valeurs de conversion correspondant à l'unité de départ
        tableau_unite = "";

        switch (unite_depart) {
            case "Millimétre":
                tableau_unite = Millimétre.split("|");
                break;
            case "Centimétre":
                tableau_unite = Centimétre.split("|");
                break;
            case "Métre":
                tableau_unite = Métre.split("|");
                break;
            case "Kilométre":
                tableau_unite = Kilométre.split("|");
                break;
            case "Yard":
                tableau_unite = Yard.split("|");
                break;
            case "Pied":
                tableau_unite = Pied.split("|");
                break;
            case "Pouce":
                tableau_unite = Pouce.split("|");
                break;
            case "Toise":
                tableau_unite = Toise.split("|");
                break;
            case "Aune":
                tableau_unite = Aune.split("|");
                break;
            case "Parsec":
                tableau_unite = Parsec.split("|");
                break;
            case "Anneelumiere":
                tableau_unite = Anneelumiere.split("|");
                break;
        }

        valeur_conversion = tableau_unite[position];
   
        // calcul final :

        resultat_calcul = calcul_final(valeur_a_convertir, valeur_conversion, valeur_decimal);


        // valeur_convertie.innerHTML = ` ${valeur_a_convertir} en ${unite_depart}  vaut ${resultat_calcul} en ${unite_cible}.`;
        valeur_convertie.innerHTML = `${resultat_calcul} ${unite_cible_reduit}`;

        formule_convertie.innerHTML = `La formule utilisée est  ${valeur_a_convertir} * ${valeur_conversion}`;


    }

    // CONVERSION TEMPERATURE -----------------------------------------------------------------//


    function calcul_temperature(unite_cible, unite_depart, valeur_a_convertir, valeur_decimal, valeur_convertie, formule_convertie) {

        // lancement traitement
        // récupération taux de conversion :
        position = "";

        switch (unite_cible) {
            case "Celsius":
                position = 0;
                break;
            case "Farhenheit":
                position = 1;
                break;
            case "Kelvin":
                position = 2;
                break;

        }

        // récupération de l'unité cible en libellé réduit:

        // on transforme la chaine de caractère unite en tableau:
        tableau_unite_reduit = unite_temperature.split("|");

        // on récupére le libellé rèduit à la position définie
        unite_cible_reduit = tableau_unite_reduit[position];

        // unité de départ :
        // on remplit le tableau contenant les valeurs de conversion correspondant à l'unité de départ
        tableau_unite = "";

        switch (unite_depart) {
            case "Celsius":
                tableau_unite = Celsius.split("|");
                break;
            case "Farhenheit":
                tableau_unite = Farhenheit.split("|");
                break;
            case "Kelvin":
                tableau_unite = Kelvin.split("|");
                break;

        }

        valeur_conversion = tableau_unite[position];
                
        // calcul final :

        resultat_calcul = calcul_final(valeur_a_convertir, valeur_conversion, valeur_decimal);
    

        // valeur_convertie.innerHTML = ` ${valeur_a_convertir} en ${unite_depart}  vaut ${resultat_calcul} en ${unite_cible}.`;
        valeur_convertie.innerHTML = `${resultat_calcul} ${unite_cible_reduit}`;

        formule_convertie.innerHTML = `La formule utilisée est  ${valeur_a_convertir} * ${valeur_conversion}`;

    }

}


// fonction calcul 

function calcul_final(a_convertir, conversion, decimal) {

    var resultat; // resultat calcul de conversion
    
   resultat = (a_convertir * conversion).toFixed(decimal);

    
    return resultat;

}


// lancement traitement lorsque l'on clique sur le bouton convertir

var button = document.getElementById("button_convert");

button.addEventListener("click", calcul_conversion);
