# # დავალება 1

# numbers = [1,2,3,4,5,6,7,8,9]

# new_numbers = []


# for i in numbers:
#     if i % 2 == 1:
#         new_numbers.append(i)

# print(new_numbers)



# # დავალება 2

# numbers = [1,2,42,21,43,12]


# new_numbers = []


# for i in numbers:
#     if i % 2 == 0 and  numbers.index(i) % 2 == 0:
#         new_numbers.append(numbers)

# დავალება 3


random = ["gega","giorgi",2,6.7,45,2.1, True , False]

empty = []

for i in random:
    if type(i) == str:
        empty.append(i)
    elif type(i) == int:
        empty.insert(random.index(i),i)
print(empty)