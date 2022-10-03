function phoneNumber(strnum: string): string {
    const listNums: string[] = strnum.toString().split('')
    if (listNums.length > 10) {
        return 'This is invalid phone number. The number should be 10 digit numbers.'
    }
    else {
        const firstThree: string = listNums.slice(0, 3).join('')
        const restFour: string = listNums.slice(3,6).join('')
        const lastFour: string = listNums.slice(6,10).join('')

        return '(' + firstThree + ') ' + restFour + '-' + lastFour
        }
    }

export {
    phoneNumber
}