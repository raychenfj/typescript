function isLeapYear(year: number): boolean {
    return year % 100 ?
        !(year % 4) :
        !(year % 400)
}

export default isLeapYear
