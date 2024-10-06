
function createSquareIterator(arr) {
    let index = 0;
    
    return {
      next: function() {
        if (index < arr.length) {
          const value = arr[index] ** 2;
          index++;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const squareIterator = createSquareIterator(numbers);

  console.log("squared values:");
  console.log(squareIterator.next());
  console.log(squareIterator.next());
  console.log(squareIterator.next());
  console.log(squareIterator.next()); 
  console.log(squareIterator.next()); 
  console.log(squareIterator.next());