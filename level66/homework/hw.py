# codewars 1



#codewars 2


def palindrome_chain_length(n):
    count = 0
    for i in range(100):
        reverse = str(n)[::-1]
        if str(n) == reverse:
            return count
        n = n + int(reverse)
        count = count + 1

#codewars 3


def nth_smallest(arr, pos):
    arr.sort()
    return arr[pos - 1]


#codewars 4

def solution(start, finish):  
    m = finish - start

    a = m // 3
    d = m % 3

    return a + d

#codewars 5

