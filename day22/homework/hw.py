# დავალება 1


# ინდექსი ეს არის მისამართი რომელიც გვეხმარება რომ მარტივად მივაგნოთ ჩვენს მიერ დაწერილ ტექსტს LIST-ში


# დავალება 2



numbers = [4,6,1,5,9,8,4]


print(numbers[0] + numbers[1])

print(numbers[1] - numbers[0])

print(numbers[1] + numbers[5])

print(numbers[3] * numbers[6])

print(numbers[4] - numbers[0])

print(numbers[1] + numbers[2])


# დავალება 3


names = ["gega","dachi","rezi","zurabi","tekla","marta","niko","gio","zuka","saba"]

print(names[5])

print(names[9])

print(names[3])

print(names[7])

print(names[1])




# დავალება 4


sawmelebi = ["gomi","mwvadi","xinkali","caqafuli","casusuli","elarji"]


for i in range(0,6):
    print(sawmelebi[i])


i = 0

while i < 6:
    print(sawmelebi[i])
    i = i + 1


# დავალება 5



cemi_sia = [2,1,5,6,3,7,10]

cemi_sia[3] = "vasli"

cemi_sia[6] = "msxali"

cemi_sia[4] = "atami"

print (cemi_sia)




# დავალება 6

# True and False or False and True or false and false or true -------------------- TRUE


# დავალება 7


cxovelebi = ["zebra","vesapi","hipopotami","tiger","lion","girafe"]


if cxovelebi[3] == "lion":
    print("there is lion on index 3")
else:
    print("there is no lion on index 3")




# დავალება 8


basket = ["ვაშლი", "ბანანი", "საზამთრო", "ატამი", "ყურძენი"]

print(basket[0])
print(basket[2])

basket[1] = "nesvi"

print(basket[0])
print(basket[1])
print(basket[2])
print(basket[3])
print(basket[4])


# დავალება 9


letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]


print(letters[2])
print(letters[4])
print(letters[5])
print(letters[9])


print(letters[6] + letters[0] + letters[6] + letters[5])



# დავალება 10 


letters_2 = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]



if letters_2[5] == "ლ":
    print("სწორია ასო ლ ")
else:
    print("არასწორია სცადე თავიდან")


if letters_2[9] == "ე":
    print("საიდუმლო სიტყვა იწყება სწორად ")
else:
    print("საიდუმლო სიტყვა არასწორია")


if letters_2[2] + letters_2[9] + letters_2[4] + letters_2[0] == "გელა":
    print("გაარტი სახელი")
else:
    print("მტერი ხარ!")
    



# დავალება 11

# ვარიანტი 1


car_breand = ["mersedes","bugati","bmw","porshe","opel","nisan","subaru"]


guest = int(input("choose any numbe between 0 - 7 "))


if guest >= 0 and guest <= 6:
    print(car_breand[guest])
else:
    print("number not found ")




# ვარიანტი 2


# if  guest == 1:
#     print(car_breand[0])

# elif guest == 2:
#     print(car_breand[1])

# elif guest == 3:
#     print(car_breand[2])

# elif guest == 4:
#     print(car_breand[3])

# elif guest == 5:
#     print(car_breand[4])

# elif guest == 6:
#     print(car_breand[5])

# elif guest == 7:
#     print(car_breand[6])
    
# else:
#     print("number not found")