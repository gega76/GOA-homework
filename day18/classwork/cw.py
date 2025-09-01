# დავალება 1

number1 = int(input("please choose any number"))

number2 = int(input("choose second number"))

number3 = int(input("choose third number"))



if number1 == number2:
    print("number1 = number2") 
elif number1 == number3:
    print("number1 = number3")
elif number2 == number3:
    print("number2 = number3")
elif number1 == number2 == number3:
    print("ერთნაირია ორივე")  
else:
    print("არცერთი არაა ტოლი")



# დავალება 2


h = int(input("choose any number between 1-12"))


if h == 12 or h == 1 or h == 2:
    print("ზამთარი")
elif h == 3 or h == 4 or h == 5:
    print("გაზაფხული")
elif h == 6 or h == 7 or h == 8:
    print("ზაფხული")
elif h == 9 or h == 10 or h ==11:
    print("შემოდგომა")
else:
    print("number not found")





# დავალება 3



name = input("what is your name")


if name == "admin":
    password = input("enter password")
    if password == "adminpassword123":
        print("სალამი admin")
    else:
        print("ჭვდომა არ გაქვს")
else:
    print("სალამი მომხმარებელო")