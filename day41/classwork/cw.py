# დავალება 1
#1)შექმენით სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიის ბოლოში დაამატე სიტყვა --> "ianvari" და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა

random = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]


random.append("ianvari")

print(random)



# დავალება 2
#2)შექმენი სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიაში მეორე ინდექსზე დაამატე სიტყვა ---> "bati" და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა

random = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]


random.insert(2)

print(random)



# დავალება 3
#3)შექმენი სია ---->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე მე 5 ინდექსზე მდგომი ელემენტი და დაპრინტე საბოლოო სია ნახე ამოიშალა თუ არა

random = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]

random.pop(5)

print(random)


# დავალება 4
#4)შექმენი სია --->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე True და ასევე ამოშალე "kote" და დაპრინტე საბოლოო სია და ნახე ამოიშალა თუ არა

random = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]


random.remove("True")
random.remove("kote")

print(random)