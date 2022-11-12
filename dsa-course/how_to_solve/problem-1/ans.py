array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'x']

def find_common_item(arr1,arr2):
    commonItem = []
    for i in arr1:  #O(n)
        for j in arr2:   #O(m)
            if i == j:
                commonItem.append(i)
    
    if commonItem:
        print(True)
    else:
        print(False)
# O(n*m)
find_common_item(array1, array2)


# 2nd approch
def find_common_item_2(arr1,arr2):
    commonItem = []
    for i in arr1:
        if i in arr2:
            commonItem.append(i)
    print(commonItem)
    if commonItem:
        print(True)
    else:
        print(False)
# O(n*m)
find_common_item_2(array1, array2)


# 3rd approch

def find_common_item_3(arr1,arr2):
    commonItem = dict()
    for i in arr1:
        commonItem[i] = True
    
    print(commonItem)
    for j in arr2:
        if j in commonItem:
            return True
    return False
    
# O(n*m)
find_common_item_3(array1, array2)

