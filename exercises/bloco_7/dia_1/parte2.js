//Exercício 1
const factorial = n => {
  let nFactorial = 1;
  for (let index = 2; index <= n; index++) {
    nFactorial *= index;
  }
  return nFactorial;
}
console.log(factorial(4));

//Exercício 2
const longestWord = phrase => {
  let words = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for (let index in words) {
    if (words[index].length > maxLength) {
      maxLength = words[index].length;
      result = words[index];
    }
  }
  return result;
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));