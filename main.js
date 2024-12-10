console.log("linked successfully ");

/******************function  inverse une chaîne *********************** */
function reverseSTR(str) {
return str.split("").reverse().join("");
}
console.log(reverseSTR("aymen"));

/*******************function Compter les caractères ************************ */

function numberSTR(str) {
    return str.length ;
}
console.log(numberSTR("aymen"));
/****************Function Mettre les mots en majuscule ******************* */
function MajsLettre(str) {
    return str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}
console.log(MajsLettre("aymen amdouni "));



var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/*******************function Rechercher le maximum et le minimum ************************ */
function MinMax(arr){
    var min=arr[0];
    var max=arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i]<min) {
            min = arr[i];
        }
        
        if(arr[i]>=max) {
            max = arr[i];
        }
      
}
return console.log(`la valeur minimum est : ${min} et la valeur maximum est : ${max}`);
}

MinMax(arr);


/*********************Somme d'un tableau***************************** */
function Sommearr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return console.log(`la somme  est : ${sum}`);
}
Sommearr(arr)
 /*********************function Factorielle****************************** */

function factorielle(number) {
   var fact=0 ;
        for (var i=0; i < number; i++) {
        fact *= i;  
    }

    return console.log(`la factorielle du ${number} = ${fact}`); 
}
factorielle(5);

/*******************Vérification des nombres premiers ******************* */
function NumPremier(n) {

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
    }

  return true; 
}

var num = 79;
var resultat = NumPremier(num);
console.log(`${num} est un nombre premier: ${resultat}`);