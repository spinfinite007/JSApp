Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app')


// const buttonEL = document.querySelector('button')
// const inputEL = document.querySelector('input')
// const listEL = document.querySelector('ul')

// // Need a function 

// function addGoal() {
//     const enteredValue = inputEL.value
//     const listItemEl = document.createElement('li')
//     listItemEl.textContent = enteredValue
//     listEL.appendChild(listItemEl)
//     inputEL.value = ''


// }

// buttonEL.addEventListener('click', addGoal)
