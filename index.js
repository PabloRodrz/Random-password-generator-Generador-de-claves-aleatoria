const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
  "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"
  , "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
  "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const showPass1 = document.getElementById('password1')
const showPass2 = document.getElementById('password2')
let messageEl = document.getElementById('message-el')
let numbersToggle = document.getElementById('numbers-toggle')
let symbolsToggle = document.getElementById('symbols-toggle')
let charactersWithoutNumbers = characters.filter(character => character.match(/[a-zA-Z\W_]/g));
let charactersWithoutSymbols = characters.filter(character => character.match(/^[a-zA-Z0-9]/g));
let charactersOnlyLetters = characters.filter(value => value.match(/^[a-zA-Z]/g))
let inputNumber = 15
const generatePasswords = () => {
  let input = document.getElementById('pass-length').value
  let password1 = ''
  let password2 = ''
  inputNumber = input === '' ? 15 : input
  if (inputNumber >= 0 && inputNumber <= 15){
    if (numbersToggle.value === 'off' && symbolsToggle.value === 'off') {
      console.log(1)
      for (let i = 0; i < inputNumber; i++) {
        password1 += charactersOnlyLetters[Math.floor(Math.random() * charactersOnlyLetters.length)]
      }
      for (let i = 0; i < inputNumber; i++) {
        password2 += charactersOnlyLetters[Math.floor(Math.random() * charactersOnlyLetters.length)]
      }
      showPass1.hidden = false
      showPass2.hidden = false
      messageEl.hidden = false
    } else if (symbolsToggle.value === 'off') {
      console.log(1)
      for (let i = 0; i < inputNumber; i++) {
        password1 += charactersWithoutSymbols[Math.floor(Math.random() * charactersWithoutSymbols.length)]
      }
      for (let i = 0; i < inputNumber; i++) {
        password2 += charactersWithoutSymbols[Math.floor(Math.random() * charactersWithoutSymbols.length)]
      }
      showPass1.hidden = false
      showPass2.hidden = false
      messageEl.hidden = false
    } else if (numbersToggle.value === 'off') {
    console.log(1)
    for (let i = 0; i < inputNumber; i++) {
      password1 += charactersWithoutNumbers[Math.floor(Math.random() * charactersWithoutNumbers.length)]
    }
    for (let i = 0; i < inputNumber; i++) {
      password2 += charactersWithoutNumbers[Math.floor(Math.random() * charactersWithoutNumbers.length)]
    }
    showPass1.hidden = false
    showPass2.hidden = false
    messageEl.hidden = false
  } else {
    for (let i = 0; i < inputNumber; i++) {
      password1 += characters[Math.floor(Math.random() * characters.length)]
    }
    for (let i = 0; i < inputNumber; i++) {
      password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    showPass1.hidden = false
    showPass2.hidden = false
    messageEl.hidden = false
  } 
}
   else {
    swal('Oh, no :(', 'You need to write a value between 1 and 15', 'error')
    showPass1.hidden = false
    showPass2.hidden = false
  }
  showPass1.textContent = password1
  showPass2.textContent = password2


}

showPass1.addEventListener('click', () => {
  let content = showPass1.textContent;
  navigator.clipboard.writeText(content);
})

showPass2.addEventListener('click', () => {
  let content = showPass2.textContent;
  navigator.clipboard.writeText(content);
})

const handleNumbersOnOff = () => {
  if (numbersToggle.checked === true) {
    numbersToggle.value = 'on'
  } else {
    numbersToggle.value = 'off'
  }
}

const handleSymbolsOnOff = () => {
  if (symbolsToggle.checked === true) {
    symbolsToggle.value = 'on'
  } else {
    symbolsToggle.value = 'off'
  }
}



