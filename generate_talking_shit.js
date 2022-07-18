function randomTextFromArray(array) {
    return array[(Math.floor(Math.random() * array.length))]
}

function generateTalkingShit(option) {
    let text = ''
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
    }
    const phrase = ['很簡單','很容易','很快','很正常']

    if (!option) {
        text = 'Dear, I know you do not like to work but you need to choose one in this form!'
        return text
    }

for(let i in task) {
    if (i === option) {
        let target = option === 'engineer'? '工程師' : option === 'designer'? '設計師' : '創業家'
        text = target + randomTextFromArray(task[i]) + randomTextFromArray(phrase) + '吧!'
    }
}
return text
}

module.exports = generateTalkingShit