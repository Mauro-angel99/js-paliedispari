const userWord = prompt(`scrivi una parola`)

function reverseWord(userWord) {
    let result = ``

    for (let i = userWord.length - 1; i >= 0; i--) {
        result += userWord[i]
    }

    if (result === userWord) {
        console.log(`la parola è palindroma`)
    } else {
        console.log(`la parola non è palindroma`)
    }
}

const reverse = reverseWord(userWord)