
# 1)

numbers = [90,91,32,53,86,92]

knew = []

for i in numbers:
    if i % 2 == 0:
        knew.append(i)

print(knew)


# 2) 

numbers2 = [90,91,32,53,86,92]

knew = []

for i in numbers2:
    if i % 2 == 1:
        knew.append(i)

print(knew)





# 3)

names = ["giorgi","rezi","aleqsandre",""]

for i in range(len(names) - 1, -1, -1):
    if names[i][0] == "გ" and names[i][-1] == "ი":
        names.remove(names[i])

print(names)


names2 = ["გეგი", "გიორგი", "ნიკა", "რეზი", "დაჩი", "საბა"]

for i in range(len(names2) - 1, -1, -1):
    if names2[i][0] == "გ" and names2[i][-1] == "ი":
        names2.pop(i)
print(names2)



# 4)

name = ["Rezi", "Gega", "Dachi", "Saba", "Alexandre"]

for i in range(len(name) - 1, -1, -1):
    if name[i][0].upper() and i % 2 == 1:
        name[i].lower()
    elif name[i][0].upper() and i % 2 == 0:
        name.pop(i)
print(name)

