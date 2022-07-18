def checkPassword(password):
    str_pass = str(password)
    count_uppercase = 0
    count_lowercase = 0
    count_numbers = 0

    for char in str_pass:
        if char.isupper():
            count_uppercase += 1
        if char.islower():
            count_lowercase += 1
        if char.isnumeric():
            count_numbers += 1

    if (len(str_pass) >= 8 and
    count_uppercase >= 1 and
    count_lowercase >= 1 and
    count_numbers >= 1):
        return True
    else:
        return False

def display(password):
    if checkPassword(password):
        return f"That\'s a good password"
    else:
        return f"That isn\'t a good password"

print(display('test'))






