# 1)
names = ["rezi", "gega", "Dachi"]

Upper_name = []

for name in names:
    if name[0].upper():
        Upper_name.append(name)

print(Upper_name)

# 2) 


names1 = ["rezi", "gega", "Dachi"]
surnames = ["rezesidze", "gabunia", "Arkania"]

for i in range(len(names)):
    names1[i] = names1[i].upper()

for i in range(len(surnames)):
    surnames[i] = surnames[i].lower()

names1.extend(surnames)

print(names1)


# 3)

words = ["rezesidze", "gabunia", "Arkania"]

words2 = []

for i in words:
    if len(i) < 6 or i[-1].isupper():
        continue
    else:
        words2.append(i)

print(words2)

# 4)

numbers = [6.7,6.1,2.1,8.9]

numbers2 = []

for i in numbers:
    if 10 < i < 100:
        numbers2.append(i)

print(numbers2)


# 5)

cities = ["tbilisi","qutaisi","zugdidi","new york","didgori"]

countries = ["Georgia", "france","italy","germany"]

for i in range(5):
    countries.insert(i, cities[i])

print(countries)