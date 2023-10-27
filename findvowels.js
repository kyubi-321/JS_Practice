function countVowelsAndConsonants(input){

    countVowels = 0;
    countConsonants = 0;
    char = {}

    if(/[a-z]/.test(char)){

        if(/[aeiou]/.test(char)){
            countVowels++;
            
        }

        countConsonants++;

    }

    return {vowels: countVowels , consonants:countConsonants};


}

input="AnkitBadhani";

result = countVowelsAndConsonants(input);
console.log(result.vowels);
console.log(result.consonants);
