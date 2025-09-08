# დავალება 1

print(20 * 40)

print(25 + 10)

print(40 / 2)

print(40**2)

print(100//5)

print(200 % 10)


# დავალება 2



# // ეს ოპერატორი წერს თუ რამდეეჯერ ჩაეტევა მითითბული რიცხვი მეორე რიცხვში 

# % ეს ოპერატორი წერს თუ რამდენი არის ნაშთი

# ** ეს ოპერატორი 2 რიცხვს აიღებს 1 ხარისხში



# დავალება 3

# **


print(20**2)

print(80**2)

print(75**5)

print(4**2)

print(90**6)


# //


print(50//2)

print(80//5)

print(10//3)

print(90//25)

print(15//2)



# %


print(77 % 2)

print(80 % 2)

print(90 % 15)

print(20 % 4)

print(50 % 9)


# დავალება 4


#  15 / 3 = 5
#  20 / 4 = 5
#  100 / 20 = 5

#  15 // 10 = 1
#  10 // 7 = 1
#  40 // 12 =  3

# 4 * 3 =  12
# 40 * 3 = 120
# 120 * 3 = 360

# 4 ** 3 =  64
# 10 ** 3 = 1000
# 2 ** 6 = 64
# 3 ** 4 = 81

# 10 % 7 = 3
# 3 % 2 = 1
# 50 % 25 = 0
# 14 % 11 = 3
# 110 % 50 = 10





# დავალება 5




# სიები და ცვლადები ერთმანეთისგან განსხვავდება იმითინ რომ ცვლადებში მხოლოდ 1 მონაცემის შენახვა შეგიძლია სიაში ბევრის




# დავალება 6



name = ["gega"]



# დავალება 7



age  = [13]



# დავალება 8


height = [1.64]


# დავალება 9


ბულიონი = [True]


# დავალება 10


all = ["gega", 13 , 1.64 , True]



# დავალება 11


h = int(input("choose any number"))

f = int(input("choose second number"))


print(h // f)

print(h ** f)

print(h % f)




# დავალება 12


num = int(input("choose any number"))


if num > 30 and num < 100:
    print("between 30 and 100")
elif num > 100 and num < 200:
    print("between 100 and 200")
else:
    print("other number")



# დავალება 13



my_name = "gega"

my_age = 13

my_height = 1.64

boolean = True

random_name = "irakli"


print(type(my_name))

print(type(my_age))

print(type(my_height))

print(type(boolean))

print(type(random_name))



# დავალება 14

i = 50

while i < 100:
    print(i)
    i = i + 5





# დავალება 15


for i in range(40,90,3):
    print(i)




# დავალება 16


i = 0

while i < 15:
    print("gega gabunia")
    i = i + 1

#--------------------------------

for i in range(15):
    print("gega gabunia")







# დავალება 17

my_name1 = "gega"
my_surname = "gabunia"


name_1 = str(input("what is your name "))



if name_1 == my_name1:
    person_name = input("what is your surname ")
    if person_name == my_surname:
        print("same name and surname")
    else:
        print("same name but differnt surname")
else:
    print("aqedan moshordi")






# დავალება 18

password = "gega1234"


while True:
    
    password_guesser = input("guess my password ")
    
    if password == password_guesser:
        print("გამოიცანი")
        break
    else:
        print("inccorect try again")