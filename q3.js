function changeCase(str) {
    ans = [...str].map(x => (x == x.toLowerCase()) ? x = x.toUpperCase() : x = x.toLowerCase())
    return ans.toString()
}

const changeCaseA = (str) => {
    ans = [...str].map(x => (x == x.toLowerCase()) ? x = x.toUpperCase() : x = x.toLowerCase())
    return ans.toString()
}

