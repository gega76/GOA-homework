ტ# დავალება 1




input = int(input("დაწერეთ რამე სიტყვა : "))

if "a" in input or "A" in input:
    print("სიტყვაში არის ასო a")
else:
    print("სიტყვაში არ არის ასო a")



if "car" not in input:
    print("ტექსტში არის სიტყვა car")
else:
    print("სიტყვაში არ არის სიტყვა car")





# დავალება 2

momxmarebeli = input("ტექსტი დაწერე: ")
for i in range(len(momxmarebeli)):
    if momxmarebeli[i] == 'a' or momxmarebeli[i] == 'A':
        continue
    print(momxmarebeli[i])