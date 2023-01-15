function leapYear(num) {
    return ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0)
}

const leapYearA = (num) => ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0)