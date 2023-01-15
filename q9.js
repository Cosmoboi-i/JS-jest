function nextChar (str) {
    arr = [...str].map(x => ((x === 'Z' || x === 'z') ? String.fromCharCode(x.charCodeAt(0) - 25) : String.fromCharCode(x.charCodeAt(0) + 1)))
    return arr.join("")
}

const nextCharA = (str) => {
    arr = [...str].map(x => ((x === 'Z' || x === 'z') ? String.fromCharCode(x.charCodeAt(0) - 25) : String.fromCharCode(x.charCodeAt(0) + 1)))
    return arr.join("")
}