# დავალება 1


name = input("choose any name: ")


print(name.upper())



# დავალება 2


name = input("choose any name but with upper case : ")


print(name.lower())



# დავალება 3

name = input("choose any name: ")


print(name.capitalize())


# დავალება 4

list = ["gega","dachi","rezi","giorgia"]


for i in range(len(list)):
    print(list[i].upper())



# დავალება 5


list = ["MWVADI","XINKALI","PURI","CASUSULI"]


for i in range(len(list)):
    print(list[i].lower())


# დავალება 6




list = ["bmw","mersedes","honda","opel"]


for i in range(len(list)):
    print(list[i].capitalize())


# დავალება 7


list = ["gega","dachi","rezi","giorgia"]

print(len(list))


# დავალება 8


string = "ალექსანდე"

print(len(string))



# დავალება 9


numbers = [2,8,20,3,90,75]

count = 0

for i in range(len(numbers)):
    if numbers[i] % 2 == 0:
        count = count + 1
print("სულ არის",count,"ლუწი რიცხვი")


# დავალება 10


numbers = [2,8,20,3,90,75]

count = 0

for i in range(len(numbers)):
    if numbers[i] % 2 == 1:
        count = count + 1
print("სულ არის",count,"კენტი რიცხვი")


# დავალება 11

start = int(input("Choose any number: "))
end = int(input("Choose second number: "))

for i in range(start,end):
    if i % 2 == 0:
        print(i)