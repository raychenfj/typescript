class Bob {
    hey(msg: string): string {
        msg = msg.trim()
        // empty string after replacing
        if (!msg.replace(/\s*/g, '')) {
            return 'Fine. Be that way!'
        }

        // contain uppercase letters, whitespace, question mark only, and end with question mark
        if (!msg.match(/[^A-Z\s\?]+/g) && msg.endsWith('?')) {
            return 'Calm down, I know what I\'m doing!'
        }

        if (msg.endsWith('?')) {
            return 'Sure.'
        }

        // not contain lowercase letters and (end with ! or only contain uppercase letters and whitespace)
        if (!msg.match(/[a-z]+/g) && (msg.endsWith('!')) || !msg.match(/[^A-Z\s]+/g)) {
            return 'Whoa, chill out!'
        }
        return 'Whatever.'
    }
}

export default Bob
