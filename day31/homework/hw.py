# დავალება 1




numbers = [1, 2, 3, 4, 5, 6]


numbers[2:4] = [10, 20, 30]


print(numbers)




# დავალება 2


fruit = ["apple", "banana", "cherry", "kiwi", "mango"]


fruit[0:2] = ["pear", "plum"]



# დავალება 3



letters = ["a", "b", "c", "d", "e", "f"]


letters[-3:] = ["x", "y", "z"]



# დავალება 4


colors = ["red", "green", "blue", "yellow", "black", "white"]

colors[1:4] = ["purple", "orange"]


# დავალება 5

names = ["გიორგი" , "ირმა" , "საბა" ]


names = ["red", "green", "blue", "yellow", "black", "white"]


# დავალება 6


number = int(input("choose any number"))


if number % 2 == 0:
    print("your number is odd")
elif number % 2 == 1:
    print("your number is even")

# დავალება 7




numbers = [20 , 40 , 23 , 11 , 100 , 29 , 89]


if numbers[3] % 2 == 0:
    print("even")
elif numbers[3] % 2 == 1:
    print("Odd")



# დავალება 8


integer = [20 , 100 , 25]

if integer % 2 == 0 and integer > 50:
    print("ლუწია და მეტია 50 ")
elif integer % 2 == 1 and integer < 50:
    print("კენტი და ნაკლები 50")


# დავალება 9


numbers = [20 , 50 , 70 , 0 , 90 ]

if numbers % 2 == 0 or numbers > 100:
    print("even or more than 100")
elif numbers % 2 == 1 or numbers < 100:
    print("Odd or less than 100")



# დავალება 10


name1 = "gega"
name2 = "giorgi"

if name1 != name2:
    print("different name")
else:
    print("Same names")