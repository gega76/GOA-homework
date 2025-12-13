# 1)

num = [1,2,3,4,5,6,7,8,9,10]

for i in range(len(num)-1, -1, -1):
    if num[i] % 2 == 0 or i % 2 == 1:
        num.remove(num[i])

print(num)



# 2)

string = ["gega", "rezi", "Dachi", "giorgi", "Alexandre"]

height = len(string)

for i in range(height):
    string.append(string[i])

print(string)


# 3)

strings = ["Rezi", "Gega", "Dachi", "Saba", "Alexandre"]

numbers = [1,2,3,4,5,6,7,8,9,10]

for num in numbers:
    if 20 < num and num < 50:
        strings.append(num)

print(strings)

# 4)

word = ["Rezi", "Gega", "Dachi", "Saba", "Alexandre"]

for i in range(len(word)):
    if word[i][0].lower():
        word[i] = word[i].capitalize()

print(word)

# 5)

# append() სიის ბოლოში სვამს ელემენტს

# remove() წაშლის ელემენტს მაგრამ ეს არის უშუალოდ ელემენტი სტრინგი

# reverse()	ატრიალებს სიას უკუღმა

# clear()	სიას მთლიანად შლის

# capitalize() პირველ ასოს ადიდებს 

# lower()  სიტყვას აპატარავებს 

# upper()  სიტყვას ადიდებს

# for ციკლით შეგვიძლია გავიმეოროთ ერთი და იგივე მოქმედება რამდენჯერაც გვინდა იმდენჯერ, და ასევე შეგვიძლია გადავუაროთ სიას

# pop() შლის ელემეტს მითითებულ ინდექსზე

# insert() ჩასვამს ელემენტს სიის კონკრეტულ ინდექსზე

# extend()	მეორე სიას ამატებს

# index()	გვეუბნება ელემენტის ინდექს

# count()	ითვლის რამდენჯერ არის ელემენტი  სიაში