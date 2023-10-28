function findVowelsAndConsonants(str) {
    // Initialize arrays to store vowels and consonants
    const vowels = [];
    const consonants = [];
    
    // Convert the input string to lowercase for case insensitivity
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      // Check if the character is a letter
      if (/[a-z]/.test(char)) {
        if (/[aeiou]/.test(char)) {
          vowels.push(char);
        } else {
          consonants.push(char);
        }
      }
    }
    
    return { vowels, consonants };
  }
  
  const inputString = "Hello, World!";
  const result = findVowelsAndConsonants(inputString);
  
  console.log("Vowels:", result.vowels);
  console.log("Consonants:", result.consonants);
  