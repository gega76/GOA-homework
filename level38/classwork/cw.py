#codewars 1

def multiply(a, b):
    return a * b


#codewars 2

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    

#codewars 3

def number_to_string(num):
    return str(num) 


#codewars 4


def solution(string):
    return string[::-1]


#codewars 5


def make_negative( number ):
    if number > 0:
        return -number
    else:
        return number
    


#codewars 6

def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"
    

#codewars 7

def find_smallest_int(arr):
    smallest = arr[0]
    for i in arr:
        if i < smallest:
            smallest = i
    return smallest