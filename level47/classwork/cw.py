# codewars 1

def high_and_low(numbers):
    nlist = numbers.split()
    new_min = int(nlist[0])
    new_max = int(nlist[0])
    for i in nlist:
        if new_min > int(i):
            new_min = int(i)
        elif new_max < int(i):
            new_max = int(i)
    return str(new_max) + " " + str(new_min)
    
# codewars 2


def get_middle(s):
    if len(s) % 2 == 0:
        return (s[(len(s)//2) -1])+(s[len(s)//2])
    else:
        return (s[len(s)//2])
    
# codewars 3

def descending_order(num):
    li = []
    for i in str(num):
        li.append(int(i))
    b = ''
    while li:
        b += str(max(li))
        li.remove(max(li))
    return int(b)


# codewars 4

def find_short(s):
    s = s.split()
    empty = s[0]
    
    for i in s:
        if len(empty) > len(i):
            empty = i
    return len(empty)


