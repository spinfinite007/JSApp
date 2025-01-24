const buttonEL = document.querySelector('button')
const inputEL = document.querySelector('input')
const listEL = document.querySelector('ul')

// Need a function 

function addGoal() {
    const enteredValue = inputEL.value
    const listItemEl = document.createElement('li')
    listItemEl.textContent = enteredValue
    listEL.appendChild(listItemEl)


}

buttonEL.addEventListener('click', addGoal)