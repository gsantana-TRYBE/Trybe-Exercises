let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] < numbers[i]) {
        let position = numbers[j];
  
        numbers[j] = numbers[i];
        numbers[i] = position;
      }
    }
  }
  console.log(numbers);