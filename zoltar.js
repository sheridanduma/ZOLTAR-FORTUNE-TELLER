function generateRandomNum(num) {
    return Math.floor(Math.random() * num)
}
//Number from O to 1

const fortuneOutcome = {
    Info: [ 'great fortune', 'new opportunity', 'change coming', 'something terrible', 'lose in the future'],
    advice : ['celebrate', 'enjoy new beginnings', 'trust no one', ' believe in yourself']
}

//Store the Outcome in an Array
let personalOutcome = []

for (let stuff in fortuneOutcome) {
    let optionIdx = generateRandomNum(fortuneOutcome[stuff].length)

    //object properties that customize the message by adding personal stuff
    switch(stuff) {
        case 'info':
            personalOutcome.push(`I see ${info[stuff][optionIdx]}.`)
            break
            case 'advice':
                personalOutcome.push(`You should ${info[stuff][optionIdx]}.`)
            break
            default:
                personalOutcome.push('Not enough info, try again !')
    }
}

function formatFortune(fortune) {
    const formatted = personalOutcome.join('\n')
    console.log(formatted)
}
//can include emojis and other stuff to make it more fun

formatFortune(personalOutcome);
console.log(formatFortuen);

//Somehow figure out Node and test the JS file
