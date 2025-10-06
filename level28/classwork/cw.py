# დავალება 1



cars = ["bmw","mersedes","honda","toyota","opel","bugatti","fiat","subaru","ferarri","dodji"]



print(cars[5:11])


# დავალება 2



numbers = [2,3,76,34,65,21,56,98,10,99,54,53,89,75,29,74,82,71,28,10]


print(numbers[-20:-9])


# დავალება 3 


names = ["gega","giorgi","lasha","gvanca","rezi","dachi","nugzari","alexsi","irakli","ilia","shota","zuka","zura","goga","giga"]


momxmarebeli = int(input("აირჩიე ნებისმიერი რიცხვი 3 დან 12 ჩათვლით "))


if momxmarebeli >= 2 and momxmarebeli <= 13:
    print(names[2:momxmarebeli])
elif momxmarebeli < 2 or momxmarebeli > 13:
    print("number not found")
