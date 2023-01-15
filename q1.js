function largestEvenNum (arr) {
    const even = arr.filter(x => x % 2 === 0)
    return Math.max(...even)
}

const largestEvenNumA = (arr) => {
    const even = arr.filter(x => x % 2 === 0)
    return Math.max(...even)
}

module.exports = {largestEvenNum, largestEvenNumA}