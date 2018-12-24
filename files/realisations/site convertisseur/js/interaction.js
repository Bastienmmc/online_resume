"use strict"
// Variable liées au DOM
let mass = document.getElementById('mass'),
    distance = document.getElementById('distance'),
    temp = document.getElementById('temp'),
    inputUnit = document.getElementById('input_unit_select'),
    outputUnit = document.getElementById('output_unit_select'),
    btnConfirm = document.getElementById('button_convert'),    
    btnReset = document.getElementById('button_reset'),
    resume = document.getElementById('resume'),
    error = document.getElementById('error'),
    valeur_convertie = document.getElementById("result"),
    formule_convertie = document.getElementById("formule");

// Variables d'unités de mesure CLD

let massUnits = unite_masse_libelle.split("|");
let distanceUnits = unite_longueur_libelle.split("|");
let tempUnits = unite_temperature_libelle.split("|");
// let massUnits = ["Milligramme", "Gramme", "Kilogramme", "Tonne"];
//let tempUnits = ["Celcius", "Kelvin", "Fahrenheit"];
//let distanceUnits = ["Millimètre", "Centimètre", "Mètre", "Kilomètre", "Année Lumière"];

/**
 * La fonction display unit est appelée au click sur les boutons de types d'unités de la page
 * elle prend en paramètre le type d'unité à afficher
 * Elle commence par effacer toute autre liste déroulante et créer une nouvelle liste déroulante pour les unités de départ et cible
 * @param {string} unit 
 * @author Bastien Chartier
 */
function displayUnit(unit) {

    //A chaque clic sur un choix de type d'unité, la liste doit s'effacer
    removeOption(inputUnit)
    removeOption(outputUnit)

    // Ensuite on créé les balises pour chaque éléments des balises sélect d'entrée et de sortie
    createOptionTag(unit, inputUnit)
    createOptionTag(unit, outputUnit)
}

/**
 * Cette fonction parcours toutes les balises <sélect> du DOM et supprime toutes les balises <option>
 * @param {tag} select 
 * @author Bastien Chartier
 */
function removeOption(select) {
    for (let i in select) {
        select.remove(i)
    }
}

/**
 * CreateOptionTag prend en paramètre le tableau créé par la méthode split() sur la string contenant la liste des unités
 * et crée une balise <option> pour chaque élément du tableau
 * @param {array} elt 
 * @param {tag} target 
 * @author Bastien Chartier
 */
function createOptionTag(elt, target) {
    for (let i = 0; i < elt.length; i++) {
        let tagOption = document.createElement('option');
        let tag = target.appendChild(tagOption);
        tag.value = elt[i];
        tag.textContent = elt[i];
    }
}

/**
 * Permet de rajouter un bouton de choix de type d'unite de mesure
 * A compléter par une table de conversion et une fonction de calcul de conversion
 * @param {string} attributeId 
 * @param {function} attributeOnclick 
 * @param {string} attributeValue 
 * @author Bastien Chartier
 */
function addAConvertingChoice(attributeId, attributeOnclick, attributeValue) {
    // ajouter un bouton
    let parentDiv = document.getElementById('buttons_type')
    let buttonToAdd = document.createElement('button')
    parentDiv.appendChild(buttonToAdd)
    buttonToAdd.setAttribute('id', attributeId)
    buttonToAdd.setAttribute('onclick', attributeOnclick)
    buttonToAdd.textContent = attributeValue
    // ajouter les propriétés au click
}
// test d'ajout de bouton
//addAConvertingChoice('volume', "displayUnit(massUnits)", 'Volume')

/**
 * Affiche un message résumant le calcul demandé dans la div "resume"
 * @param {event} e 
 * @author Bastien Chartier
 */
function showSelectedInput(e) {
    e.preventDefault()
    // recupérer les données input/ decimales/ valeur/output
    let value = document.getElementById("input_number_area").value
    let dec = document.getElementById("input_decimal_area").value
    let degrees = ((inputUnit.value == 'Celcius') || (inputUnit.value == 'Fahrenheit') || (inputUnit.value == 'Kelvin'))
    //les afficher dans la balise #resume
    let msg = `Voici la converion de ${value} ${(degrees) ? 'degrés ' : ''}${inputUnit.value}${((value < 2) || (degrees)) ? '' : 's'}  en ${(degrees) ? 'degrés ' : ''}${outputUnit.value} avec ${dec} chiffre${(dec > 1) ? 's' : ''} après la virgule.`;

    resume.textContent = msg;
    error.textContent = '';

}

/**
 * Réinitialise l'ensemble des éléments entrés et des messages d'alerte ou résumé
 */
function resetFields () {
    // on vide la liste des options
    removeOption(inputUnit)
    removeOption(outputUnit)
    // on efface le message de résumé
    resume.textContent = '';
    // on efface les messages d'erreur
    error.textContent = '';
    //on Efface les zones de résultat
    valeur_convertie.innerHTML = '';
    formule_convertie.innerHTML = '';
}

btnConfirm.addEventListener('click', showSelectedInput);
btnReset.addEventListener('click', resetFields);


