function countVowelsAndConsonants(input) {
    let countVowels = 0;
    let countConsonants = 0;

    for (let char of input.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            if (/[aeiou]/.test(char)) {
                countVowels++;
            } else {
                countConsonants++;
            }
        }
    }

    return { vowels: countVowels, consonants: countConsonants };
}

let input = "AnkitBadhani";
let result = countVowelsAndConsonants(input);
console.log(result.vowels);
console.log(result.consonants);


function displayName(){
    console.log("my name is ankit badhani");
}







// function countVowelsAndConsonants(input) {
//     let countVowels = 0;
//     let countConsonants = 0;
//     let uniqueVowels = new Set();
//     let uniqueConsonants = new Set();

//     for (let char of input.toLowerCase()) {
//         if (/[a-z]/.test(char)) {
//             if (/[aeiou]/.test(char)) {
//                 uniqueVowels.add(char);
//             } else {
//                 uniqueConsonants.add(char);
//             }
//         }
//     }

//     countVowels = uniqueVowels.size;
//     countConsonants = uniqueConsonants.size;

//     return { vowels: countVowels, consonants: countConsonants };
// }

// let input = "AnkitBadhani";
// let result = countVowelsAndConsonants(input);
// console.log(result.vowels);
// console.log(result.consonants);
