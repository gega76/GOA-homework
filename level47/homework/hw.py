# codewars 1

def get_middle(s):
    if len(s) % 2 == 0:
        return (s[(len(s)//2) -1])+(s[len(s)//2])
    else:
        return (s[len(s)//2])
    
# codewars 2


# codewars 3


# codewars 4


# codewars 5


# codewars 6

def get_count(sentence):
    count = 0
    vowels = "aeiou"
    for i in sentence:
        if i in vowels:
            count = count + 1
    return count