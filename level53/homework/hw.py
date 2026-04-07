#codewars 1

def maskify(cc):
    if len(cc) <= 4:
        return cc
    else:
        m = ""
        
        for i in range(len(cc) - 4):
            m = m + "#"
        
        m = m + cc[-4:]
        return m
    


#codewars 2


def no_boring_zeros(n):
    n = str(n)
    if n == "0":
        return 0
    else:
        if n[-1] == "0":
            return int(n.rstrip("0"))
        else:
            return int(n)
        


#codewars 3




#codewars 4


def number(lines):
    r = []
    i = 0

    while i < len(lines):
        l = i + 1
        text = lines[i]
        nline = str(l) + ": " + text
        r.append(nline)
        i = i + 1

    return r



#codewars 5


def distinct(seq):
    r = []
    i = 0

    while i < len(seq):
        if seq[i] not in r:
            r.append(seq[i])
        i = i + 1

    return r



#codwars 6






#codewars 7

