# დავალება 1



# append() ეს ფუნქცია სიაში ამატებს ელემენტს ოღონდ სიის ბოლოში

# insert() ეს ფუნქცია გვეხმარება სიაში ჩავამატოთ ელემენტი სადაც გვინდა

# pop() ეს ფუნქცია გვეხმარება რომ სიიდან ამოვშალოთ ელემენტი ოღონდ მას გადაეცემა Integer ანუ რომელი ინდექსიდან გვინდა რომ ამოვშალოთ ელემენტი

# remove() ეს ფუნქცია გვეხმარება რომ სიიდან ამოვშალოთ ელემენტი მაგრამ მას გადაეცემა უშუალოდ ელემენტი რაც გვიწერია სიაში მაგალითად name = ["gega"] და დავწერთ name.remove("gega")

# დავალება 2


numbers = [1,2,3,4,5,6,7,8,9]

numbers.append(10)

print(numbers)


# დავალება 3

names = ["nikolozi","dachi","rezi"]


names.append("gega")

print(names)


# დავალება 4


names = ["gega","dachi","rezi"]

M = str(input("What is your name: "))

names.append(M)

print(names)


# დავალება 5

names = ["gio","rusudani","leila","zura"]

names.insert(3 , "gega")

print(names)

# დავალება 6


sia = ["dachi","gio","revazi","luka","saba","zura"]

num = int(input("choose any number between 0-6: "))
name = str(input("What is your name: "))

sia.insert(num , name)

print(sia)

# დავალება 7


fruit = ["apple", "banana"]

fruit.insert(1 , "orange")

print(fruit)

# დავალება 8


names = ["goga", "saba", "luka"]

names.insert(2,"irakli")

print(names)


# დავალება 9


foods = ["bread", "milk", "cheese"]

foods.insert(0,"water")

print(foods)

# დავალება 10

numbers = [5, 10, 15]

numbers.pop()

print(numbers)

# დავალება 11

fruits = ["apple", "banana", "orange"]

fruits.pop(1)

print(fruits)

# დავალება 12

names = ["goga", "saba", "luka"]

names.pop(1)

print(names)

# დავალება 13


colors = ["red", "green", "blue" , "yellow" , "black" , "purple"]

colors.pop(0)
print(colors)

colors.pop(3)
print(colors)

# დავალება 14

tems = ["pen", "pencil", "book", "eraser"]

M = int(input("Chose any number between 0-4: "))

tems.pop(M)

print(tems)

# დავალება 15

fruits = ["apple", "banana", "orange"]

fruits.remove("banana")

print(fruits)

# დავალება 16

nums = [3, 5, 3, 7]

nums.remove(3)

print(nums)

# დავალება 17

colors = ["red", "blue", "green"]

colors.remove("blue")

print(colors)


# დავალება 18

names = ["goga", "saba", "luka"]

M = str(input("choose any name goga or saba or luka: "))

if M == "goga" or M == "saba" or M == "luka":
    names.remove(M)
    print(names)
else:
    print("try again")

# დავალება 19

items = ["pen", "pencil", "book", "pencil"]

items.remove("pencil")

print(items)

# დავალება 20

# Solorean - გავაკეთე
