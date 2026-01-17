# დავალება 1


string = "gamarjoba dedamiwa"

xmovani = "aeiou"

count = 0

for i in string:
    if i in xmovani:
        count = count + 1

print("წინადადებაში არის სულ:",count,"ხმოვანი")


# დავალება 2


numbers = [2,10,40,15,17,22,120]

only_even = 0

for i in numbers:
    if i % 2 == 0:
        only_even = only_even + i
print(only_even)


# დავალება 3


numbers = [2,10,40,15,17,22,120]

yvelazedidi_cifri = numbers[0]

for i in numbers:
    if yvelazedidi_cifri < i:
        yvelazedidi_cifri = i
print("ყველაზე დიდი ციფრია:",yvelazedidi_cifri)


# დავალება 4

momxmarebeli = input("what is the password: ")

while len(momxmarebeli) < 6:
    momxmarebeli = input("inccorect try again: ")
print("Your password is correct")


# დავალება 5

numbers = [2,4,2,1,4,1,10,9] #-------> [2,4,1,10,9]

new_numbers = []

for i in numbers:
    if i not in new_numbers:
        new_numbers.append(i)
print(new_numbers)

# დავალება 6

# winadadeba = "Hello I love apples Hello"

# ვერ გავიგე

# დავალება 7

num = 19

m = int(input("Guess what number what i am thinking of: "))

count = 1

while num != m:
    m = int(input("Guess what number what i am thinking of: "))
    count = count + 1
print("სწორია, ცდა =",count)