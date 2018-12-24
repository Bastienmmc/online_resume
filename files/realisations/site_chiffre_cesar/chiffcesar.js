var phrase = document.getElementById('phrase'),
    phraseAcoder = document.getElementById('phrase'),
    phCode = document.getElementById('phCode'),
    alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
    alphabetReverse = "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba",
    decalage = document.getElementById('cle'),
    btnEncoder = document.getElementById('encoder'),
    btnCopie = document.getElementById('copie'),
    btnDecoder = document.getElementById('decoder');

//--------------------------------------------------------------------
// Fontion de codage de la phrase
function encoder() {
    let phraseCodee = '';
    for (var i = 0; i < phraseAcoder.value.length; i++) {
        lettre = phraseAcoder.value.charAt(i);
        position = alphabet.indexOf(lettre);
        // suppression des ponctuations et espaces
        if ((lettre == ' ') || (lettre == '!') || (lettre == ',') || (lettre == '.') || (lettre == '?') || (lettre == '-') || (lettre == '_') || (lettre == '\'') || (lettre == ';') || (lettre == ':')) {
            phraseCodee += '';
            continue;
        }
        // création de la phrase codée
        phraseCodee += alphabet.charAt(position + parseInt(decalage.value));
    }
    phCode.value = phraseCodee
}
//--------------------------------------------------------------------
// Fonction de décodage de la phrase
function decoder() {
    let phraseADeCoder = document.getElementById('phrase'),
        phraseDeCodee = '';
    for (var i = 0; i < phraseADeCoder.value.length; i++) {
        lettre = phraseADeCoder.value.charAt(i);
        position = alphabetReverse.indexOf(lettre);
        phraseDeCodee += alphabetReverse.charAt(position + parseInt(decalage.value));
    }
    phCode.value = phraseDeCodee
}

//------------------------------------------------------------------
//Copier dans le presse papier la phrase codée ou décodée pour la partager
function copy() {
    var copyText = document.getElementById('phCode');
    copyText.select();
    document.execCommand("copy");
}

// Gestion événementielle
btnEncoder.addEventListener('click', encoder);
btnCopie.addEventListener('click', copy);
btnDecoder.addEventListener('click', decoder);
