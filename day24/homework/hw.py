# დავალება 1


numbers = [1,2,3,4,5,6,7]


print(numbers[-1] * numbers[-7])


print(numbers[-3])

print(numbers[-5])


# დავალება 2

fruit = ["apple", "banana", "cherry", "grape", "kiwi", "orange"]



print(fruit[2])

print(fruit[-4])

print(fruit[3])

print(fruit[-3])



# დავალება 3


numbers2 = [3,4,5,6,7,1,2,9,8,11]

chooser = int(input(" დაწერე ნებისმიერი რიცხვი 0 დან 10 მდე : "))


if chooser >= 0 and chooser < 10:
    print(numbers2[chooser])
else:
    print("you entered negative or more than 10")





# დავალება 4 



sia = ["dog " ," most " ,"is " ,"angry " ,"running "  , "forest ", "fast ", "in " , "cat " ,"human ", "very "]


print(sia[-11] + sia[-9] + sia[-7] + sia[-4] + sia[-6] + sia[-1] + sia[-5])

print(sia[0] + sia[2] + sia[4] + sia[7] + sia[5] + sia[10] + sia[6])

print(sia[8] + sia[2] + sia[10] + sia[3])




# დავალება 5


animals = ["dog", "cat", "horse", "cow", "sheep", "goat"]


chooser1 = int(input("აირჩიე რიცხვი 0 დან 6 მდე"))


if chooser1 == animals[1]:
    print("შენ აირჩიე კატა")
elif chooser1 == animals[5]:
    print("შენ აირჩიე თხა")
else:
    print("სხვა ცხოველი აირჩიე")






# დავალება  6


country = ["georgia","germany","france","saudi arabia","USA","China"]


chooser2 = int(input("აირჩიე ნებისმიერი რიცხვი 0 დან 7 მდე "))

chooser3 = int(input("აირჩიე მეორე რიცხვი 0 დან 7 მდე "))


if chooser2 > chooser3:
    print(country[chooser2-chooser3])
elif chooser3 > chooser2:
    print(country[chooser3-chooser2])
elif chooser2 == chooser3:
    print(country[chooser2])
else:
    print("numbers not found")






# დავალება 7



word = input("Choose any word")

if word[0] == "a":
    print("პირველი ასო არის a")
elif word[-1] == "z":
    print("ბოლო ასოა z")
else:
    print("სიტყვა არც a-თი იწყება და არც z-ით მთავრდება")





# დავალება 8


word_1 = input("Choose any word ")

if word_1[0] == word_1[-1]:
    print("1 და ბოლო ასოა ერთნაირია")
elif word_1[0] != word_1[-1]:
    print("პირველი და ბოლო ასო განსხვავებულია")





# დავალება 9



cvladi = "agivorsbgitr"


print(cvladi[1] + cvladi[4] + cvladi[1] + cvladi[0])

print(cvladi[6] + cvladi[0] + cvladi[7] + cvladi[0])

print(cvladi[7] + cvladi[0] + cvladi[10] + cvladi[2] + cvladi[3] + cvladi[0] + cvladi[11])



# დავალება 10


string = "giorgi"


for i in range(6):
    print(string[i])


i = 0

while i < 6:
    print(string[i])
    i = i + 1