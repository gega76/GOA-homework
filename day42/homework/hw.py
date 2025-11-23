# დავალება 1

fruits = ["apple","banana","Pineapple"]
fruits2 = ["grape","orange"]

fruits.extend(fruits2)

print(fruits)


# დავალება 2


num1 = [10,20,30]

num2 = [40, 50]

num1.extend(num2)

print(num1)

# დავალება 3

names = ["goga","gega","niko","dachi","rezi"]

names.reverse()

print(names)


# დავალება 4


nums = [2,3,1,5,6,5,1,2,3,5]

print(nums.count(5))

# დავალება 5

letters = ["a","b","a","c"]

print(letters.count("a"))

# დავალება 6

names = ["goga","gega","saba","niko","dachi","rezi"]

print(names.index("saba"))

# დავალება 7

list = ["red","green","blue"]

print(list.index("blue"))

# დავალება 8

nums = [2,3,1,5,2]

nums1 = [7, 8, 9]

nums.extend(nums1)

print(nums)

# დავალება 9

foods = ["xinkali","mwvadi","qababi","casusuli"]

foods.reverse()

print(foods)

# დავალება 10


cities = ["qutaisi","london","New york","tbilisi","telavi","kaxeti"]

print(cities.index("tbilisi"))

# დავალება 11

animals = ["cat","dog","cat","cow"]

print(animals.count("cat"))

# დავალება 12

fruits = ["apple", "banana"]

fruits.append("grape")

print(fruits)

# დავალება 13

numbers = [1, 2, 3]
numbers2 = [4, 5]

numbers.extend(numbers2)

# დავალება 14

names = ["goga", "saba"]

names.insert(1 , "luka")

print(names)

# დავალება 15

items = ["pen", "pencil", "eraser"]

items.pop()

print(items)

# დავალება 16

colors = ["red", "green", "blue"]

colors.remove("green")

print(colors)

# დავალება 17

foods = ["bread", "milk"]


if len(foods) >= 2:
    foods.append("cheese")
elif len(foods) < 2:
    foods.append("meat")
print(foods)

# დავალება 18


nums = [10, 20, 30]

M = int(input("შეიყვანე მთელი რიცხვი: "))

if M in nums:
    print("Already in list")
else:
    nums.append(40)
    print(nums)


# დავალება 19

letters = ["a", "b", "c","d"]

M = str(input("choose any letter: "))

letters.insert(2 , M)
print(letters)


# დავალება 20

values = [1, 2, 3, 4]

M = int(input("choose any index: "))

if M in values:
    values.pop(M)
    print(values)
else:
    print("index out of range")

# დავალება 21

pets = ["cat", "dog", "hamster"]

M = input("name any pet: ")

if M in pets:
    pets.remove(M)
    print("Removed")
else:
    print("not found")


# დავალება 22

a = [5, 5, 7]

M = int(input("choose any number: "))

if M in a:
    print(a.count(M))
else:
    a.append(M)
    print(a)

# დავალება 23

queue = ["first", "second"]

M = input("Choose any word: ")

queue.insert(M)

if len(queue) > 5:
    queue.pop()
    print(queue)
else:
    queue.reverse()
    print(queue)


# დავალება 24

nums = [2, 4, 6]

M = int(input("Choose any number: "))

if M > 0:
    nums.append(M)
    print(nums)
elif M <= 0:
    print("Only positive allowed")

# დავალება 25

mix = ["x", "y", "z"]

nums =  [1, 2, 3]

mix.extend(nums)

M = input("choose any letter: ")

if M in mix:
    mix.remove(M)
    print("removed")
else:
    print("NO SUCHED ELEMENT")