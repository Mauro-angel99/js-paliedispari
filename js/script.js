const userChoice = prompt(`pari o dispari`)
const userNunber = parseInt(prompt(`scrivi un numero da 1 a 5`))
console.log(userNunber)

function randomNunber() {
    const min = parseInt(1)

    const max = parseInt(5)

    let nunber = Math.floor(Math.random() * (max + 1 - min)) + min
    console.log(nunber)

    return nunber
}

const computerNunber = randomNunber()

const sum = userNunber + computerNunber
console.log(sum)


function evenShots(sum) {

    let result = `pari`

    if (sum % 2) {
        result = `dispari`
    }
    console.log(result)
    return result
}

const result = evenShots(sum)


if (result === userChoice) {
    alert(`hai vinto!`)
} else {
    alert(`hai perso`)
}