print ("Welcome to trivia")

question = input("are you ready to play? yes / no ")

score = 0 


if question.lower() == "yes":
    age = int(input("1. question: what is my age: "))

    if age == 13:
        print("correct")
        score = score + 1
        country = input("2. question: what is the largest country in the world: ")


        if country.lower() == "russia":
            print("correct")
            score = score + 1
            weapon = input("3. question: what country the most weapons in the world: ")

            if weapon.lower() == "pakistan":
                print("correct")
                score = score + 1
                people = input("4. question: what country has most people in it: ")

                if people.lower() == "china":
                    print("correct")
                    score = score + 1
                    math = int(input("5. question: what is 10 * 20"))

                    if math == 200:
                        print("correct")
                        score = score + 1
                        print("thanks for playing you score is = ", score)
                
                    else:
                        print("incorect your score is :",score)
                else:
                    print("incorect your score is :",score)
            else:
                ("incorect your score is :",score)
        else:
            print("incorect your score is :",score )
    else:
        print("incorect your score is :",score)
else:
    print("thanks for playing your score is = ", score )

