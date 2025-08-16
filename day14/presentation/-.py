username = input("enter username: ")
password = input("Enter password: ")
Balance_gel = 10
Balance_eur = 0
Balance_usd = 0
# 1 usd = 2.69 gel
# 1 usd = 0.86 eur
# 1 gel = 0.32 eur
if password == "1234" and username == "dachi":
    print("Password is correct")
    question = 4
    while True :
         question = input("What do you want to do? ")
         if question == "log off":
              break
         if question =="deposit":
               valute = input("Witch valute do you want (usd gel eur) ")
               money = int(input("How much money do you want to deposit(TYPE NUMBERS ONLY)?: "))
               if valute == "gel":
                    Balance_gel = Balance_gel + money
                    print("Deposit sucsessful your balance is", Balance_gel )
               if valute == "usd":
                    money = money*2.69
                    Balance_gel = Balance_gel + money
                    print("Deposit sucsessful your balance is", Balance_gel )
               if valute == "eur":
                    money = money*3.15
                    Balance_gel = Balance_gel + money
                    print("Deposit sucsessful your balance is", Balance_gel )
         if question == "pay":
              where = input("Witch valute do you want to pay (usd gel eur) ")
              payment = int(input("How much money do you want to pay?"))
              if where == "gel":
                   if payment <= Balance_gel :
                        Balance_gel = Balance_gel - payment
                        print("payment sucsessful!")
                   else:
                        print("payment failed not enough gel")
              if where == "usd":
                    if payment <= Balance_usd :
                        Balance_usd = Balance_usd - payment
                        print("payment sucsessful!")
                    else:
                        print("payment failed not enough usd")
              if where == "eur":
                   if payment <= Balance_eur :
                        Balance_eur = Balance_eur - payment
                        print("payment sucsessful!")
                   else:
                        print("payment failed not enough eur") 
         if question == "conversion":
              what = input("what do you want to convert?")
              where = input("where do you want to convert? (usd, gel, eur)")
              money = int(input("how much money do you want to convert?"))

              if what == "gel":
                   if Balance_gel < money:
                    
               
                    if where == "gel":
                        print(Balance_gel)

                   if where == "usd":
                        Balance_gel = Balance_gel - money
                        money = money * 0.37


                        Balance_usd = Balance_usd + money

                        print("conversion succsesful ", Balance_usd ,)
                        print("your gel balance is ", Balance_gel)
               

               
                   
                   
                    

         
              
else :
     print("Password or username is incorrect, Try again!")