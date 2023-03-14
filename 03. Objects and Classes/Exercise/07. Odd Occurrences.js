function extractOddWords(sentence) {
    // Create a map to count the frequency of each word
    const wordMap = new Map();
    const words = sentence.toLowerCase().split(' ');
    for (const word of words) {
      const count = wordMap.get(word) || 0;
      wordMap.set(word, count + 1);
    }
  
    // Filter the map to get the odd-numbered words
    const oddWords = [];
    for (const [word, count] of wordMap.entries()) {
      if (count % 2 === 1) {
        oddWords.push(word);
      }
    }
  
    return oddWords.join(' ');
  }

console.log(extractOddWords('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
console.log(extractOddWords('Cake IS SWEET is Soft CAKE sweet Food'));
