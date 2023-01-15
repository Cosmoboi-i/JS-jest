function vowelCount(str) {
    let n = str.match(/[aeiou]/gi)
    return n === null ? 0 : n.length
}

const vowelCountA = (str) => {
    let n = str.match(/[aeiou]/gi)
    return n === null ? 0 : n.length
}
