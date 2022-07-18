from time import sleep
from sys import executable, argv
from os import path, system, name
from subprocess import call
from threading import Timer
from random import sample
from time import time

seconds = 35
score = 0
answer_checker_list = ['a', 'b', 'c']
questionnaire_dict = {
0:['''
valueOne = 5 ** 2
valueTwo = 5 ** 3

print(valueOne + valueTwo)

\x1B[1;3mWhat is the output of the following code? (A/B/C):\x1B[0m

A: 25
B: 150
C: Error: Invalid Syntax
                                        ''', 
"b", "\n\x1B[1;3mCorrect Answer: \x1B[0mB: 150"],
1:['''
for i in range(10, 15, 1):
  print( i, end=', ')

\x1B[1;3mWhat is the output of the following code? (A/B):\x1B[0m

A: 10, 11, 12, 13, 14,
B: 10, 11, 12, 13, 14, 15,
                                        ''',
"a", "\n\x1B[1;3mCorrect Answer: \x1B[0mA: 10, 11, 12, 13, 14,"],
2:['''
p, q, r = 10, 20 ,30
print(p, q, r)

\x1B[1;3mWhat is the output of the following code? (A/B/C):\x1B[0m

A: 10 20
B: 10 20 30
C: Error: Invalid Syntax
                                        ''',
"b", "\n\x1B[1;3mCorrect Answer: \x1B[0mB: 10 20 30"],
3:['''
sampleList = ["Jon", "Kelly", "Jessa"]
sampleList.append(2, "Scott")
print(sampleList)

\x1B[1;3mWhat is the output of the following code? (A/B/C):\x1B[0m

A: The program executed with errors
B: ['Jon', 'Kelly', 'Scott', 'Jessa']
C: ['Jon', 'Kelly', 'Jessa', 'Scott']
                                        ''', 
"a", "\n\x1B[1;3mCorrect Answer: \x1B[0mA: The program executed with errors"],
4:['''
var1 = 1
var2 = 2
var3 = "3"

print(var1 + var2 + var3)

\x1B[1;3mWhat is the output of the following code? (A/B/C):\x1B[0m

A: 33
B: 123
C: Error. Mixing operators between numbers and strings are not supported
                                        ''', 
"c", "\n\x1B[1;3mCorrect Answer: \x1B[0mC: Error. Mixing operators between numbers and strings are not supported"]
}

def colored(r, g, b, text):
    return "\033[38;2;{};{};{}m{} \033[38;2;255;255;255m".format(r, g, b, text)

def clear():
    # for windows
    if name == 'nt':
        _ = system('cls')   
    # for mac and linux(here, os.name is 'posix')
    else:
        _ = system('clear')

clear()

title = f'''\n
        ----------------------------------
        ##################################
        ╚(ಠ_ಠ)=┐ THE QUICK QUIZ ╚(ಠ_ಠ)=┐
        ##################################
        ----------------------------------
           By: Christian Junel Moriones
'''
the_end = f''' 
                                            
Time's up! ಥ_ಥ                                              
Study harder!!!                  
                                                     
Please launch the program again to retry.                              
Closing in 3 seconds...                                                         
                                        
                    '''

print(colored(80, 255, 0, title))
sleep(1.5)
print(f"\n\x1B[1;3mEarn as many points as you can in {seconds} seconds.")
sleep(1)
input(f"Are you ready? Press enter to start! (ಠ⌣ಠ)\x1B[0m")

start_time = time()

def times_up():  
    clear()
    print(colored(80, 255, 0, the_end))
    sleep(3)
    clear()
    quit()

S = Timer(seconds, times_up)  
S.start()

for i in sample(range(0, len(questionnaire_dict)),len(questionnaire_dict)): #Generate random unique integers
    clear()
    print(questionnaire_dict[i][0])
    while True:
        answer = str(input("Answer: ")).lower().strip()
        if answer in answer_checker_list:
            if questionnaire_dict[i][1] == answer:
                score += 1
                print(f"\nWell done! You're correct!\n\x1B[3mYou have {seconds - (time() - start_time):.0f} secs left.\x1B[0m")
                input(f"\nPress enter to continue, move fast!")
                False
                break         
            else:
                print(questionnaire_dict[i][2] +f"\n\x1B[3mYou have {seconds - (time() - start_time):.0f} secs left.\x1B[0m")
                input(f"\nPress enter to continue, move fast!")
                False
                break
        else:
            print(f"Invalid input, try again. Hurry!!!")
            continue

S.cancel()
clear()

finishes_list = [f''' 
                                         
Wow! You're fast! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                                          
But you only got {score}/{len(questionnaire_dict)}!                  
                                                     
Please study more and thanks for playing!                                                                      
                    ''',
f''' 
                                         
Wow! You're fast! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                                          
But you only got {score}/{len(questionnaire_dict)}!                  
                                                     
Please study more and thanks for playing!                                                                      
                    ''',
f''' 
                                         
Wow! You're fast! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                                          
And you got {score}/{len(questionnaire_dict)}!                  
                                                     
This is not enough, thanks for playing!                                                                    
                    ''',
f''' 
                                         
Wow! You're fast! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                                          
You got {score}/{len(questionnaire_dict)}!                  
                                                     
Not bad... not bad... Thanks for playing!                                                                      
                    ''',
f''' 
                                         
Wow! You're fast! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                                          
You got {score}/{len(questionnaire_dict)}!                  
                                                     
You're almost there! Thanks for playing!                                                                   
                    ''',
f''' 
                                         
Wow! You're fast! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                                          
You got {score}/{len(questionnaire_dict)}!                  
                                                     
Amazing. Your future is bright!                                                                      
                    '''
]

print(colored(80, 255, 0, finishes_list[score]))

while True: #Ask players if they want to play again or exit the program.
    try_again = input(f"\nDo you want to play again? (Y/N)").lower().strip()
    if try_again.lower() == 'y':
        clear()
        call([executable, path.realpath(__file__)] + argv[1:])
    elif try_again.lower() == 'n':
        clear()
        quit()
    else:
        print(f"Please enter y or n only.")
        continue 
