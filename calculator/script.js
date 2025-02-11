function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      // Replace '×' with '*' and '÷' with '/' for evaluation
      const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
      display.value = eval(expression); // Evaluate the expression
    } catch (error) {
      display.value = 'Error'; // Handle invalid expressions
    }
  }