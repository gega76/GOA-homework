# დავალება 1

numbers = [1,2,3,4,5]

new_numbers = []


for i in numbers:
    new_numbers.append(i * 2)
print(new_numbers)


# დავალება 2

names = ["gega","dachi","giorgi","rezi","saba","luka","olegi"]

b = int(input("choose any number: "))

names.insert(b , "saba")

print(names)


# დავალება 3

word = "iamfromgeorgia"

xmovnebi = "aeiou"

for i in word:
    if i in xmovnebi:
        print(i)

# დავალება 4

names = ["gega","dachi","giorgi","rezi","saba","luka","olegi"]

for i in names:
    if len(i) > 4 or names.index(i) % 2 == 0:
        names.remove(i)
print(names)


# დავალება 5

nums = [2,4,1,5,6,12,3]

total = 0

for i in nums:
    total = total + i

print(total / len(nums))