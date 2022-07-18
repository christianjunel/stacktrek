from os import system, name

hangman_display = [
                                                f''' 
                                            ------------
Game over.                                  |          |
Well done, you've just killed him.          |          O
                                            |          |
Better luck next time!                      |         /|\\
                                            |         / \\
                                              (ノಠ益ಠ)ノ彡┻━┻
                                                
                                            |
                                            |
                                           ===        ''',
                                                f''' 
                                            ------------
It was "fun" knowing you...                 |          |
                                            |          O
                                            |          |
                                            |         /|\\
                                            |         / 
                                            
                                            
                                            |
                                            |
                                           ===        ''',
                                                f''' 
                                            ------------
~ Lamb of God, you take awayyyyy..          |          |
The sins of the wooooooorld..               |          O
                                            |          |
                                            |         /|\\
                                            |         
                                            

                                            |
                                            |
                                           ===        ''', 
                                                f''' 
                                            ------------
Oh wow! You are wrong again.                |          |
Tell my family I love them.                 |          O
                                            |          |
                                            |         /|
                                            |         
                                            

                                            |
                                            |
                                           ===        ''',
                                                f''' 
                                            ------------
Okay, now you're really just trying         |          |
to kill me!                                 |          O
                                            |          |
                                            |          |
                                            |         
                                            

                                            |
                                            |
                                           ===        ''', 
                                                f''' 
                                            ------------
Oops! Be careful...                         |          |
You really don't have a choice though.      |          O
                                            |          
                                            |         
                                            |         
                                            

                                            |
                                            |
                                           ===        ''',
                                                f''' 
                                            ------------
Let's get started! I trust you.             |          |
Choose any letter and press enter...        |          
                                            |          
                                            |         
                                            |         
                                            

                                            |
                                            |
                                           ===        '''                                                                                                                                                                          
]
#######
hangman_display_correct = [
                                                f''' 
                                            ------------
OMG, that was a close call...               |          |
                                            |          O
                                            |          |
                                            |         /|\\
                                            |         / 
                                           
                                            
                                            |
                                            |
                                           ===        ''',
                                                f''' 
                                            ------------
~ Alleluiaaaaaaaaaaaa!!!!!!!!!!!            |          |
Praise the Lord...                          |          O
                                            |          |
                                            |         /|\\
                                            |         
                                           

                                            |
                                            |
                                           ===        ''', 
                                                f''' 
                                            ------------
You are correct again!                      |          |
Keep up the good work.                      |          O
                                            |          |
                                            |         /|
                                            |         
                                            

                                            |
                                            |
                                           ===        ''',
                                                f''' 
                                            ------------
You are up for a treat, keep it rolling!    |          |
You are almost there...                     |          O
                                            |          |
                                            |          |
                                            |         
                                           

                                            |
                                            |
                                           ===        ''', 
                                                f''' 
                                            ------------
Oops! Be careful...                         |          |
You really don't have a choice though.      |          O
                                            |          
                                            |         
                                            |         
                                            

                                            |
                                            |
                                           ===        ''',
                                                f''' 
                                            ------------
Wow! You are very lucky...                  |          |
Please continue!                            |          
                                            |          
                                            |         
                                            |         
                                            

                                            |
                                            |
                                           ===        '''                                                                                                                                                                          
]

def show_hangman_incorrect(guesses_left:int):
    print(hangman_display[guesses_left])
    return

def show_hangman_correct(guesses_left:int):
    print(hangman_display_correct[guesses_left-1])
    return

def show_hangman_finished():
    print( 
                                                f''' 
                                            ------------
CONGRATULATIONS. YOU'VE WON!                |          |
Let me treat you to dinner now...           |          
                                            |          
                                            |         
                                            |          O
(づ｡◕‿‿◕｡)づ     (｡◕‿‿◕｡)                             \|/               
                                                       |\\
                                            |          / \\
                                            |
                                           ===        
                                           
                                           '''
    )
    return

def clear():
    # for windows
    if name == 'nt':
        _ = system('cls')
    
    # for mac and linux(here, os.name is 'posix')
    else:
        _ = system('clear')