
function to_morse(inputtext){
  console.log("1")
  let morse = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "&": ".-...",
  "'": ".----.",
  "@": ".--.-.",
  ")": "-.--.-",
  "(": "-.--.",
  ":": "---...",
  ",": "--..--",
  "=": "-...-",
  "!": "-.-.--",
  ".": ".-.-.-",
  "-": "-....-",
  "+": ".-.-.",
  '"': ".-..-.",
  "?": "..--..",
  "/": "-..-.",
}
  let text = inputtext.toString().toLowerCase() 
  let translation = ""
  WordsList = text.split(" ")
  for (word of WordsList){
    characters = word.split("")
    characters = characters.concat(" ")
    for (char of characters) {
      if (char in morse){
        translation += morse[char] + ' '
      }
      
    }
    translation += "/"
  }
  return translation.slice(0,-1)
}
console.log(to_morse("hi"))
const expressionDisplay = document.getElementById('expression');
console.log(2)
const resultDisplay = document.getElementById('result');
console.log(3)
const buttons = document.querySelectorAll('button');

let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.dataset.value;

        if (value === '=') {
            try {
                let result = eval(currentExpression);
                resultDisplay.textContent = to_morse(result);
            } catch (error) {
                resultDisplay.textContent = error;
            }
        } else if (value === 'AC') {
            currentExpression = '';
            expressionDisplay.textContent = '';
            resultDisplay.textContent = '';
        } else if (value === 'DEL') {
            currentExpression = currentExpression.slice(0, -1);
            expressionDisplay.textContent = currentExpression;
        } else {
            currentExpression += value;
            expressionDisplay.textContent = currentExpression;
        }
    });
});
