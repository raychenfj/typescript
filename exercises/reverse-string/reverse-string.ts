class ReverseString {
    static reverse(str:string):string {
        return str.split('').reverse().join('')
    }
}

export default ReverseString
