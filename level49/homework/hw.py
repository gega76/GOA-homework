#codewars 1   https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python

def is_square(n):
    if n < 0:
        return False
    i = 0
    while i * i <= n:
        if i * i == n:
            return True
        i += 1
    return False



#codewars 2  https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python

def xo(s):
    x = 0
    o = 0
    s = s.lower()
    
    for i in s:
        if i == 'x':
            x += 1
        elif i == 'o':
            o += 1
    
    if x == o:
        return True
    else:
        return False


#codewars 3  https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/python



def sum_two_smallest_numbers(numbers):
    if numbers[0] < numbers[1]:
        smallest = numbers[0]
        second_smallest = numbers[1]
    else:
        smallest = numbers[1]
        second_smallest = numbers[0]

    for i in range(2, len(numbers)):
        if numbers[i] < smallest:
            second_smallest = smallest
            smallest = numbers[i]
        elif numbers[i] < second_smallest:
            second_smallest = numbers[i]

    return smallest + second_smallest
    


#codewars 4 https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python


def DNA_strand(dna):
    empty = ""
    for i in dna:
        if i == "A":
            empty += "T"
        elif i == "T":
            empty += "A"
        elif i == "C":
            empty += "G"
        elif i == "G":
            empty += "C"
    return empty


#codewars 5 https://www.codewars.com/kata/551f37452ff852b7bd000139/train/python



def add_binary(a,b):
    t = a + b
    if t == 0:
        return "0"
    else:
        s = ""
        while t > 0:
            d = t % 2
            s = str(d) + s
            t = t // 2
        return s