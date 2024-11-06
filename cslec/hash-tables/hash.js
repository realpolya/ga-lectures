const hashSimple = (word) => {
    let sum = 0
    word.split('').forEach(letter => sum += letter.charCodeAt())
    console.log(sum % 11)
    return sum % 11
}

hashSimple('Polina')
hashSimple('Peter')
hashSimple('Zaire')
hashSimple('Timothy')
