# დავალება 2

words = ["gega","dachi","rezi","giorgi","xatuna"]
new_list = []

for i in words:
    if i[0] == "g" and i == i.lower():
        new_list.append("Goga")
    elif i[0] == "N" or i == i.upper():
        new_list.append("Nika")
    else:
        new_list.append("ლიდერი")

print(new_list)


# დავალება 3



numbers = [1, 2, 3, 4, 5, 6, 7]
new_numbers = []

i = 0
while i < len(numbers):
    num = numbers[i]
    if num % 2 == 0 or i % 2 == 0:
        new_numbers.append(num * 2)
    elif num % 2 != 0 or i % 2 != 0:
        new_numbers.append(num * 2)
    i += 1


# დავალება 4

words = ["Nika", "PROGRAMMING", "school", "PYTHON", "Laptop", "GEORGIA"]
new_list = []

i = 0
while i < len(words):

    if len(words[i]) > 6 or words[i].upper() == words[i]:
        new_list.append(words[i].lower())
    else:
        new_list.append(words[i] + words[i])

    i += 1

print(new_list)

# დავალება 5

numbers = "0123456789"
pasuxi = []

for i in range(len(numbers)):
    D = int(numbers[i])
    if i % 2 == 0 or D > 7:
        pasuxi.append(D)

print(pasuxi)

