array = [1,2,4,5] 

sum = 11

# params 2
# return true/false

def findSum(arr, sum):
    for i in arr:
        for j in arr:
            if i+j == sum:
                return True
    return False

print(findSum(array, sum))


# 2nd approch

def findSum2(arr, sum) :
    storeDict = {}
    
    for i in arr:
        com = sum - i
        if com not in storeDict:
            storeDict[i] = True
        else:
            return True
    return False


print(findSum2(array, sum))

    
