#codewars 1


def create_phone_number(n):
    return '(' + str(n[0]) + str(n[1]) + str(n[2]) + ') ' + str(n[3]) + str(n[4]) + str(n[5]) + '-' + str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])


#codewars 3

def max_tri_sum(numbers):
    nlist = []
    sum = 0
    maxnum = numbers[0]
    for i in numbers:
        if i not in nlist:
            nlist.append(i)

    for i in range(3):
        maxnum = nlist[0]
        for j in nlist:
            if j > maxnum:
                maxnum = j
        sum = sum + maxnum
        nlist.remove(maxnum)

    return sum


#codewars 4

def to_float_array(arr): 
    nlist = []
    for i in arr:
        if "." in i:
            nlist.append(float(i))
        else:
            nlist.append(int(i))
    return nlist


#codewars 5


def capitalize(s):
    even = ""
    odd = ""

    for i in range(len(s)):
        if i % 2 == 0:
            even += s[i].upper()
            odd += s[i]
        else:
            even += s[i]
            odd += s[i].upper()

    return [even, odd]

#codewars 6


def adjacent_element_product(array):
    max = array[0] * array[1]
    for i in range(1, len(array)):
        if array[i] * array[i-1] > max:
            max = array[i] * array[i-1]
    return max

#codewars 7




#codewars 8


#codewars 9

def factorial(n):
    new = 1
    for i in range(1, n + 1):
        new = new * i
    return new


#codewars 10

