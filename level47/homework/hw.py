# codewars 1

def get_middle(s):
    if len(s) % 2 == 0:
        return (s[(len(s)//2) -1])+(s[len(s)//2])
    else:
        return (s[len(s)//2])
    
# codewars 2

def is_anagram(test, original):
    test = test.lower()
    original = original.lower()

    if len(test) != len(original):
        return False

    for letter in test:
        if test.count(letter) != original.count(letter):
            return False
        else:
            continue

    return True

# codewars 3

def maskify(cc):
    if len(cc) <= 4:
        return cc
    else:
        m = ""
        
        for i in range(len(cc) - 4):
            m = m + "#"
        
        m = m + cc[-4:]
        return m

# codewars 4

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

# codewars 5

# ვერ გავიგე

# codewars 6

def get_count(sentence):
    count = 0
    vowels = "aeiou"
    for i in sentence:
        if i in vowels:
            count = count + 1
    return count