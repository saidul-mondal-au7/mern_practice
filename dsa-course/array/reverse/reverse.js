const str = 'My name is Saidul.'

// sol 1
const reverse = (str) => {
    arr = str.split(" ")
    // console.log(arr)
    reverse_arr = []
    for (let i = arr.length-1 ; i >= 0; i --) {
         reverse_arr.push(arr[i])
    }
    result = []
    for (let i of reverse_arr) {
       result.push(i.split("").reverse().join(''))
    }
    console.log(result.join(' '))
}

reverse(str)

// sol 2
 const rev_2 = (str) => {
    rev_arr = []
    for (let i = str.length - 1; i >=0; i-- ){
        rev_arr.push(str[i])
    }
    console.log(rev_arr.join(''))
 }

//  sol 3
const rev_3 = (str) => str.split('').reverse().join('')
console.log(rev_3(str))

// sol 4
const rev_4 = (str) => [...str].reverse().join('')
console.log(rev_4(str))

rev_2(str)