# დავალება 1


names = ["ina" , "givi" , "nika" , "daviti" , "ia" , "lizi"]


names[0:2] = ["irina" , "milana" , "kira", "mate"]

names[4:] = ["gia" , "emzari" , "xvicha"]


print(names)






# დავალება 2




number = int(input("choose any number: "))


if number > 10 and number < 20:
    print("this number is between 10 and 20")
elif number >= 20 and number < 100:
    print("this number is between 20 and 100")
elif number > 100 and number % 2 == 0:
    print("more than 100 and it is even")
else:
    print("get out!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")






# დავალება 3


number = int(input("choose any number"))


if number % 2 == 0:
    print("your number is odd")
elif number % 2 == 1:
    print("your number is even")
