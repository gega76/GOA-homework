#codewars 1




#codewars 2


def litres(time):
    return int(time * 0.5)


#codewars 3

def to_jaden_case(string):
    words = string.split()
    result = ""

    for i in range(len(words)):
        result = result + words[i].capitalize()
        if i != len(words) - 1:
            result = result + " "

    return result


#codewars 4

def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 == 1:
        return True
    if flower2 % 2 == 0 and flower1 % 2 == 1:
        return True
    else:
        return False
    
#codewars 5


def maps(a):
    result = []
    for i in a:
        result.append(i * 2)
    return result



#codewars 6

def solution(text, ending):
    if len(ending) > len(text):
        return False

    empty = ""
    i = len(text) - len(ending)
    while i < len(text):
        empty = empty + text[i]
        i = i + 1

    if empty == ending:
        return True
    else:
        return False