# დავალება 1




# დავალება 2

def remove(st):
    nlist = st.split()
    newlist = []
    for i in nlist:
        newlist.append(i.rstrip("!"))  
    return " ".join(newlist)