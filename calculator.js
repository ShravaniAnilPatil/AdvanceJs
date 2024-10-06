function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      switch (operation) {
        case "add":
          resolve(num1 + num2);
          break;
        case "subtract":
          resolve(num1 - num2);
          break;
        case "multiply":
          resolve(num1 * num2);
          break;
        case "divide":
          if (num2 === 0) {
            reject("Error: Division by zero is not allowed");
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject("Error: Invalid operation");
      }
    });
  }
  calculator(50, 5, "add")
    .then((result) => console.log("Result:", result)) 
    .catch((error) => console.error(error));
  
  calculator(23, 0, "divide")
    .then((result) => console.log("Result:", result))
    .catch((error) => console.error(error)); 
  