vowel_Counter = 0

the_String = str(input("Enter a string here: "))
string_Set = set(the_String)

if 'a' in string_Set or 'A' in string_Set:
    vowel_Counter += 1

if 'e' in string_Set or 'E' in string_Set:
    vowel_Counter += 1

if 'i' in string_Set or 'I' in string_Set:
    vowel_Counter += 1

if 'o' in string_Set or 'O' in string_Set:
    vowel_Counter += 1

if 'u' in string_Set or 'U' in string_Set:
    vowel_Counter += 1

if vowel_Counter == 0:
    print("There are no vowels in your string.")
elif vowel_Counter == 1:
    print("There is only one different vowel in the string.")
else:
    print(f"There are {vowel_Counter} different vowels in the string.")