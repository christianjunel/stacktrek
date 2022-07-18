def reduce_measure(num, unit:str):

    if unit.lower().strip() == 'cup' and num == 1:
            return f"{num} cup"
    elif unit.lower().strip() == 'cups':
        if num > 1 and num % int(num) == 0:
            return f"{num} cups"
        # elif num % int(num) != 0:
        #     cups = int(num // 1)
        #     tablespoons = round(int((num % 1.0) * 16.0), 1)
        #     for_teaspoons = round((num % 1) * 16, 1)
        #     teaspoons = round(int((for_teaspoons % 1)*3), 1)
        else:
            return f"Please enter a valid input"

    elif unit.lower().strip() == 'tablespoon' and num == 1:
            return f"{num} tablespoon"
    elif unit.lower().strip() == 'tablespoons':
        if num == 16:
            return f"{int(num/16)} cup"
        elif num % 16 == 0 and num >= 32:
            return f"{int(num/16)} cups"
        elif num < 16 and num > 1:
            return f"{num} tablespoons"
        elif num > 16:
            cups = num // 16 
            tablespoons = num % 16
            if cups > 1 and tablespoons > 1:
                return f"{cups} cups, {tablespoons} tablespoons"
            elif cups == 1 and tablespoons == 1:
                return f"{cups} cup, {tablespoons} tablespoon"
            elif cups == 1 and tablespoons > 1:
                return f"{cups} cup, {tablespoons} tablespoons"    
            elif cups > 1 and tablespoons == 1:
                return f"{cups} cups, {tablespoons} tablespoon" 
        else:
            return f"Please enter a valid input." 

    elif unit.lower().strip() == 'teaspoon' and num == 1:
            return f"{num} teaspoon"
    elif unit.lower().strip() == 'teaspoons':
        cups = num // 48
        for_tablespoons = num % 48
        tablespoons = for_tablespoons // 3
        teaspoons = for_tablespoons % 3

        if num == 48:
            return f"{int(num/48)} cup"
        elif num % 48 == 0 and num > 48:
            return f"{int(num/48)} cups"
        elif num == 3:
            return f"{int(num/3)} tablespoon"
        elif num % 3 == 0 and num <= 45:
            return f"{num/3} tablespoons"
        elif num == 2:
            return f"{num} teaspoons"       
        elif num <= 0:
            return f"Invalid input."   
        ####    
        elif cups > 1 and tablespoons > 1 and teaspoons == 0: #All plurals, no teaspoon
            return f"{cups} cups, {tablespoons} tablespoons"
        elif cups > 1 and tablespoons == 0 and teaspoons > 1: #All plurals, no tablespoon
            return f"{cups} cups, {tablespoons} teaspoons"
        elif cups == 0 and tablespoons > 1 and teaspoons > 1: #All plurals, no cups
            return f"{tablespoons} tablespoons, {teaspoons} teaspoons"
        ####
        elif cups > 1 and tablespoons == 1 and teaspoons == 0: #No teaspoon, singular tablespoon
            return f"{cups} cups, {tablespoons} tablespoon"
        elif cups == 1 and tablespoons > 1 and teaspoons == 0: #No teaspoon, singular cup
            return f"{cups} cup, {tablespoons} tablespoons"
        elif cups == 0 and tablespoons == 1 and teaspoons > 1: #No cup, singular tablespoon
            return f"{tablespoons} tablespoon, {teaspoons} teaspoons"
        elif cups == 0 and tablespoons > 1 and teaspoons == 1: #No cup, singular teaspoon
            return f"{tablespoons} tablespoons, {teaspoons} teaspoon"
        elif cups == 1 and tablespoons == 0 and teaspoons > 1: #No tablespoon, singular cup
            return f"{cups} cup, {teaspoons} teaspoons"
        elif cups > 1 and tablespoons == 0 and teaspoons == 1: #No tablespoon, singular teaspoon
            return f"{cups} cups, {teaspoons} teaspoon"
        ####
        elif cups > 1 and tablespoons == 1 and teaspoons == 1: #All singular, plural cup
            return f"{cups} cups, {tablespoons} tablespoon, {teaspoons} teaspoon"
        elif cups == 1 and tablespoons > 1 and teaspoons == 1: #All singular, plural tablespoon
            return f"{cups} cup, {tablespoons} tablespoons, {teaspoons} teaspoon"
        elif cups == 1 and tablespoons == 1 and teaspoons > 1: #All singular, plural teaspoon
            return f"{cups} cup, {tablespoons} tablespoon, {teaspoons} teaspoons"
        ####
        elif cups == 0 and tablespoons == 1 and teaspoons == 1: #All singular, no cup
            return f"{tablespoons} tablespoon, {teaspoons} teaspoon"
        elif cups == 1 and tablespoons == 0 and teaspoons == 1: #All singular, no tablespoon
            return f"{cups} cup, {teaspoons} teaspoon"
        elif cups == 1 and tablespoons == 1 and teaspoons == 0: #All singular, no teaspoon
            return f"{cups} cup, {tablespoons} tablespoon"
        ####
        elif cups > 1 and tablespoons > 1 and teaspoons > 1: #All plurals
            return f"{cups} cups, {tablespoons} tablespoons, {teaspoons} teaspoons"
        elif cups == 1 and tablespoons == 1 and teaspoons == 1: #All singular
            return f"{cups} cup, {tablespoons} tablespoon, {teaspoons} teaspoon"
        ####
        elif cups == 1 and tablespoons > 1 and teaspoons > 1: #Singular cup
            return f"{cups} cup, {tablespoons} tablespoons, {teaspoons} teaspoons"    
        elif cups > 1 and tablespoons == 1 and teaspoons > 1: #Singular tablespoon
            return f"{cups} cups, {tablespoons} tablespoon, {teaspoons} teaspoons"
        elif cups > 1 and tablespoons > 1 and teaspoons == 1: #Singular teaspoon
            return f"{cups} cups, {tablespoons} tablespoon, {teaspoons} teaspoon"
        else:
            return f"Please enter a valid input"
    else:
        return f"Invalid input."

        # return f"{cups, tablespoons, teaspoons}"

print(reduce_measure(1, 'cups'))
print(reduce_measure(1, 'tablespoons'))
print(reduce_measure(1, 'teaspoons'))

