function longestString(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b)
}

const longestStringA = (arr) => arr.reduce((a, b) => a.length > b.length ? a : b)
