#დავალება 1


number = float(input("შეიყვანეთ ნებისმიერი რიცხვი: "))

if number > 0:
    print("ეს რიცხვი დადებითი რიცხვია")
elif number < 0:
    print("ეს რიცხვი უარყოფითი რიცხვია")
else:
    print("ეს რიცხვი ნულია")


#დავალება 2

age = int(input("რა არის თქვენი ასაკი"))

if age <= 12:
    print("ბავშვი ხარ")
elif age <= 19:
    print("მოზარდი თინეიჯერი ხარ")
elif age <= 64:
    print("ზრდასრული ხართ")
elif age <= 120:
    print("ხანში შესული ხართ")
elif age <= 111111111:
    print("გურუ ან ჯადოქარი")
else:
    print("უარყოფითი ინფო")


# დავალება 3

password = "gega1234"

chances = 0

guesser = input("can you guess my password ")

while guesser != password and guesser !="123":
    chances = chances + 1
    guesser = input("wrong password enter password again ") 
if guesser == password:
    print("გამოიცანი შენ დაგჭირდა", chances)
else:
    print("ვერ გამოიცან womp womp", chances)



# დავალება 4


number1 = int(input(" choose any number"))
number2 = float(input("choose any float"))
number3 = float(input("choose second float"))

if number1 > number2 and number1 > number3:
    print("ეს არის უდიდესი რიცხვი", number1)

elif number2 > number1 and number2 > number3:

    print("ეს არის უდიდესი რიცხვი", number2)

else:
    print("ეს არის უდიდესი რიცხვი", number3)


# დავალება 5


question = (input("chose any number between 1-7"))


if question == "1":
    print("ორშაბათი")
elif question == "2":
    print("სამშაბათი")
elif question == "3":
    print("ოთხშაბათი")
elif question == "4":
    print("ხუთშაბათი")
elif question == "5":
    print("პარასკევი")
elif question == "6":
    print("შაბათი")
elif question == "7":
    print("კვირა")
else:
    print("არ ვიცი ეგ რა დღეა")