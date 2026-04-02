# დავალება 1

def solution(number):
    if number <= 0:
        return 0
    
    total = 0
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    
    return total


# დავალება 2


def check_exam(arr1, arr2):
    score = 0

    for i in range(len(arr1)):
        if arr2[i] == "":
            score = score + 0
        elif arr2[i] == arr1[i]:
            score = score + 4
        else:
            score = score - 1

    if score < 0:
        return 0
    else:
        return score
    
        

# დავალება 3

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


# დავალება 4


def find_short(s):
    s = s.split()
    empty = s[0]
    
    for i in s:
        if len(empty) > len(i):
            empty = i
    return len(empty)            


# დავალება 5




# დავალება 6



# დავალება 7


def points(games):
    total = 0
    for i in games:
        if i[0] > i[2]:
            total += 3
        elif i[0] == i[2]:
            total += 1
        else:
            total += 0
    return total


# დავალება 8

