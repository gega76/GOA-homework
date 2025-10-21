# დავალება 1



for i in range(51):
    if i == 0:
        print(i ,"ნული")
    elif i % 2 == 0:
        print(i ,"ლუწია")
    else:
        print(i ,"კენტია")


    




# დავალება 2



for i in range(20):
    if i % 3 == 0 :
        print("იყოფა 3 ზე")
    elif i % 5 == 0:
        print("იყოფა 5 ზე")
    elif i % 3 == 0 and i % 5 == 0:
        print("იყოფა 3 ზე და 5 ზე")
    else:
        print("არც 3 ზე და არც 5 არ იყოფა")




# დავალება 3



number = int(input("choose any number: "))

luwi = 0 

kenti = 0

for i in range(number + 1):
    if i % 2 == 0 :
        luwi = luwi + 1
    else:
        kenti = kenti + 1


print("ამდენი ლუწი :",luwi , "და ამდენი კენტი :",kenti)




# დავალება 4



nums = [10, 25, 33, 47, 80, 99]


for i in range(nums[0:]):
    if nums > 50:
        print("მეტია 50")
    else:
        print("ნაკლებია 50")





# დავალება 5



jami = 0

for i in range(0,100,2):
    if i % 2 == 0:
        print(i)
        jami = jami + i

print("ლუწი რიცხვების ჯამია:", jami)




# დავალება 6



names = ["gega","giorgi","lasha","dachi","alexsandre","akaki"]

# ????????????????????????????????????????????????????????????





# დავალება 7


for i in range(20):
    if i == 0:
        print("ნული")
    elif i % 2 == 0:
        print("ლუწია")
    else:
        print("კენტია")



# დავაალება 8


numbers = [5, 15, 25, 35, 45, 55] 

#?????????????????????????????????????????




# დავალება 9



momxmarebeli = input("tell me any word pls")



for i in range(i):
    
    print(momxmarebeli)





# დავალება 10

total = 0


for i in range(1, 11):
    total = total + i 

print("ჯამი არის:", total)