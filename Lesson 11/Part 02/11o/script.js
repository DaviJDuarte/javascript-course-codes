const str1 = ['hello', 'world', 'search', 'good'];
const str2 = ['not', 'found'];

function search(words) {
  let found = -1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'search') {
      found = i;
    }
  }
  return found;
}

console.log(search(str1));
console.log(search(str2));