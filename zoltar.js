function generateRandomNum(num) {
    return Math.floor(Math.random() * num)
}

const fortuneOutcome = {
    fortunelInfo: [ 'great fortune', 'new opportunity', 'change coming', 'something terrible', 'lose in the future'],
    advice : ['celebrate', 'enjoy new beginnings', 'trust no one', ' believe in yourself']
}

let personalOutcome = []

for (let stuff in fortuneOutcome) {
    let optionIdx = generateRandomNum(fortuneOutcome[stuff].length)

    switch(stuff) {
        case 'fortunelInfo':
            personalOutcome.push(`I see ${fortuneInfo[stuff][optionIdx]}.`)
            break
            case 'advice':
                personalOutcome.push(`You are having ${fortuneInfo[stuff][optionIdx]}.`)
            break
            case 'advice':
                personalOutcome.push(`You should ${fortuneInfo[stuff][optionIdx]}.`)
            break
            default:
                personalOutcome.push('Not enough info, try again !')
    }
}

function formatFortune(fortune) {
    const formatted = personalOutcome.join('\n')
    console.log(formatted)
}

formatFortune(personalOutcome);
console.log(formatFortuen);