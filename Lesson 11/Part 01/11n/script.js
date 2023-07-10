function countWords(words) {
  let wordCount = {};

  for (let i = 0; i < words.length; i++) {
    wordCount[words[i]] ? wordCount[words[i]]++ : wordCount[words[i]] = 1;
  }
  return wordCount;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));