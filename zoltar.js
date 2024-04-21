function generateRandomNum(num) {
    return Math.floor(Math.random() * num)
}
//Number from O to 1

let info = ['great fortune', 'new opportunity', 'change coming', 'something terrible', 'lose in the future']
let randInfo = info[Math.floor(Math.random() * 5)]

let advice = ['celebrate', 'enjoy new beginnings', 'trust no one', 'believe in yourself']
let randAdvice = advice[Math.floor(Math.random() * 4)]


const fortuneOutcome = {
    info: [ 'great fortune', 'new opportunity', 'change coming', 'something terrible', 'loss in the future'],
    advice : ['celebrate', 'enjoy new beginnings', 'trust no one', ' believe in yourself']
}

//Store the Outcome in an Array
let personalOutcome = []

for (let stuff in fortuneOutcome) {
    let optionIdx = generateRandomNum(fortuneOutcome[stuff].length)

    //object properties that customize the message by adding personal stuff
    switch(stuff) {
        case 'info':
            personalOutcome.push(`I see ${info[optionIdx]}.`)
            break
            case 'advice':
                personalOutcome.push(`You should ${advice[optionIdx]}.`)
            break
            default:
                return 'Not enough info, try again !'
    }
}

function formatFortune(fortune) {
    const formatted = personalOutcome.join('\n')
    console.log(formatted)
}

formatFortune(personalOutcome);
