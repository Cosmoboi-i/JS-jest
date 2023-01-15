function areDigitsSame(num) {
    num = num.toString()
        return num.split('').every(x => x === num[0])
}

const areDigitsSameA = (num) => {
    num = toString(num)
    return num.split('').every(x => x === num[0])
}


module.exports = (areDigitsSame, areDigitsSameA)