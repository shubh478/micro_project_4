
const display = document.getElementById('display');


function appendToDisplay(value) {
  display.value += value;
}


function calculateResult() {
  try {
    let result = eval(display.value);

    if (result % 1 !== 0) {
      result = result.toFixed(3);
    }
    
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function handleButtonClick(event) {
  const buttonText = event.currentTarget.querySelector('span').textContent;
  console.log(buttonText);


  if (buttonText === '=') {
    calculateResult();
  } else if (buttonText === 'DEL') {
    display.value = display.value.slice(0,-1);
  } else if (buttonText === 'RESET') {
    display.value = ''; 
  } else {
    appendToDisplay(buttonText);
  }
}

document.querySelectorAll('.item').forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
