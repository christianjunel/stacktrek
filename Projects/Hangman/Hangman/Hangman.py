from subprocess import call
from sys import executable, argv
from os import path
from hangmanfunc import show_hangman_incorrect, clear, show_hangman_correct, show_hangman_finished
from random import choice
from time import sleep
from threading import Timer
from time import time

seconds = 35
max_guesses = 6
incorrect_letters = ""
clear()
print(f''' 
                                            ------------               
Welcome To The Hangman Game!                |          |              
                                            |            O         
See the gallows here? ------------->        |           \|        
                                            |            |\\
I'll be in there soon if you can't          |           / \\      
guess the word. You have {max_guesses} tries.                       ┬─┬ノ( º _ ºノ)                                                 
And you only have {seconds} seconds.                      ==============================             
Good luck!                                  |            \x1B[1mThe Hangman Game\x1B[0m
                                            |      ==============================
Press ENTER to get started.                ===      \x1B[3mBy: Christian Junel Moriones\x1B[0m
''')
input()
clear()

start_time = time()

def times_up():  
    clear()
    print(f''' 
                                            ------------
Game over.                                  |          |
Well done, you've just killed him.          |          O
                                            |          |
You've ran out of time.                     |         /|\\
Closing in 3 seconds. Run to play again.    |         / \\
                                               (ノಠ益ಠ)ノ彡┻━┻
                                            
                                            |  
                                            |
                                           ===        ''')
    sleep(3)
    clear()
    quit()
    

S = Timer(seconds, times_up)  
S.start()

word_letters_list = list(choice(open('Projects/Hangman/Hangman/words.txt').read().split()).strip())
the_word_clue_display = ""
the_clue = []
the_checker = []
test = ""
for letter in word_letters_list:
    the_clue.append("_ ")
    the_checker.append(letter + " ")
    test += letter
show_hangman_incorrect(max_guesses)

while max_guesses != 0:
    # print(test) #show the random word generated
    if the_checker == the_clue:
        S.cancel()
        clear()
        max_guesses = 0
        show_hangman_finished()
        print(f"Congratulations! You're safe!\nThanks for playing.")
        while True:
            try_again = input(f"\nDo you want to play again? (Y/N)")
            if try_again.lower() == 'y':
                clear()
                call([executable, path.realpath(__file__)] + argv[1:])
            elif try_again.lower() == 'n':
                clear()
                quit()
            else:
                print(f"Please enter y or n only.")
                continue    
    else:
        for char in the_clue:
            the_word_clue_display += char      
        print(f"          \n{the_word_clue_display}\n")   
        # print(the_clue) show how the list is actually changing
        guess = str(input(f"Guess a letter to complete the word: ")).lower().strip() # The 0 index is for only storing the first character
    
        if guess not in word_letters_list:
            if len(guess) == 1 and guess.isalpha():
                if guess in incorrect_letters:
                    clear()
                    the_word_clue_display = ""
                    show_hangman_incorrect(max_guesses)
                    print(f"\nGuesses left: {max_guesses}")
                    print(f"Incorrect letter/s: {incorrect_letters}")
                    print(f"\x1B[1;3mYou have {seconds - (time() - start_time):.0f} secs left.\x1B[0m")
                    print(f"\n\x1B[1mYou've already inputted that letter.\x1B[0m")
                else:
                    max_guesses -= 1
                    the_word_clue_display = ""
                    incorrect_letters += guess + " "
                    clear()
                    show_hangman_incorrect(max_guesses)
                    if max_guesses == 0:
                        S.cancel()
                        while True:
                            try_again = input(f"\nDo you want to play again? (Y/N)").lower()
                            if try_again == 'y':
                                clear()
                                call([executable, path.realpath(__file__)] + argv[1:])
                            elif try_again == 'n':
                                clear()
                                quit()
                            else:
                                print(f"Please input y or n only.")
                                continue  
                    else:
                        print(f"\nGuesses left: {max_guesses}")
                        print(f"Incorrect letter/s: {incorrect_letters}")
                        print(f"\x1B[1;3mYou have {seconds - (time() - start_time):.0f} secs left.\x1B[0m")  
            else:
                clear()
                show_hangman_incorrect(max_guesses)
                the_word_clue_display = "" 
                print(f"\nGuesses left: {max_guesses}")
                print(f"Incorrect letter/s: {incorrect_letters}")
                print(f"\x1B[1;3mYou have {seconds - (time() - start_time):.0f} secs left.\x1B[0m")  
                print(f"\n\x1B[1mYou can only input a single alphabet.\x1B[0m")                             
        else:
            if len(guess) == 1 and guess.isalpha():
                clear()
                show_hangman_correct(max_guesses)
                print(f"\nGuesses left: {max_guesses}")
                print(f"Incorrect letter/s: {incorrect_letters}")
                print(f"\x1B[1;3mYou have {seconds - (time() - start_time):.0f} secs left.\x1B[0m")                     
                if guess in the_word_clue_display:
                    the_word_clue_display = "" #refreshes the clue display to be used as a storage again for the_clue list. 
                    print(f"\n\x1B[1mYou've already inputted that letter.\x1B[0m")
                else:
                    for i in range(len(word_letters_list)):
                        if word_letters_list[i] == guess:
                            the_clue[i] = guess + " "
                            the_word_clue_display = ""
            else:
                clear()
                show_hangman_correct(max_guesses)
                the_word_clue_display = "" 
                print(f"\nGuesses left: {max_guesses}")
                print(f"Incorrect letter/s: {incorrect_letters}")
                print(f"\x1B[1;3mYou have {seconds - (time() - start_time):.0f} secs left.\x1B[0m")  
                print(f"\n\x1B[1mYou can only input a single alphabet.\x1B[0m") 





























        