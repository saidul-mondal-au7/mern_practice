const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

const findCommon = (arr1,arr2) => {
    let map = {}
    for (let i of arr1) {
        map[i] = true
    }

    console.log(map)
    for (let j of arr2) {
        if (map[j]) {
            return true
        }


    }
    return false
}

console.log(findCommon(array1, array2))


// find common 2

const findCommon2 = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item))
} 

console.log(findCommon2(array1,array2))