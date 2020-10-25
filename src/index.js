module.exports = function reverse (n) {
    if(n < 0) {
       let num = n * (-1)
        return num.toString().split('').reverse().join('')
    } 
    return n.toString().split('').reverse().join('')
}
// console.log(reverse (-123))
