stiring = "My name is Saidul."

# sol 1

def rev_1(stiring):
    print(stiring[::-1])
rev_1(stiring)

# sol 2

def rev_2(stirin):
    rev_arr = list(stirin)
    # print(rev_arr)
    rev_res = ""
    for i in range(len(rev_arr)-1,-1,-1):
        rev_res += rev_arr[i]
    print(rev_res)

rev_2(stiring)


