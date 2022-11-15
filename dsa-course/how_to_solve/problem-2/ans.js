const array = [1,3,4,5,6,2]

const sum = 9


const findSome = (arr, some) => {
    storeData = {}
    for (let i of arr){
        com = sum - i

        if (!storeData[com]) {
            storeData[i] = true
        }
        else{
            return  true
        }
    }
    return false
}

console.log(findSome(array, sum))
