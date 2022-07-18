
string = str(input("Enter your message: "))
key = int(input("What's the key?: "))
encoded_message = ""

for char in string:
    if char.isalpha() and char.isupper():
        ascii_code_enc = (ord(char)+key-ord('A')) % 26 + ord('A') #we're getting the number of shifts based on the index of the uppercased char
        encoded_message += chr(ascii_code_enc)
    elif char.isalpha() and char.islower():
        ascii_code_enc = (ord(char)+key-ord('a')) % 26 + ord('a') #we're getting the number of shifts based on the index of the lowercased char
        encoded_message += chr(ascii_code_enc)
    else:
        encoded_message += chr(ord(char))
print(encoded_message)