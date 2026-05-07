#codewars 1



#codewars 2

def compute_sum(n):
    total = 0

    for i in range(1, n + 1):
        for d in str(i):
            total += int(d)

    return total

#codewars 3

def is_valid_walk(walk):
    if len(walk) == 10 and walk.count("n") == walk.count("s") and walk.count("w") == walk.count("e"):
        return True
    else:
        return False


#codewars 4


def digital_root(n):
    while n >= 10:
        total = 0
        for i in str(n):
            total += int(i)
        
        n = total
    
    return n


#codewars 5


