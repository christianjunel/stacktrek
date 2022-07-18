
get_mNumber = int(input("Please enter month number: " ))
if get_mNumber <= 0 or get_mNumber > 12:
    print("Please choose a valid number month (1-12).")
else:
    if get_mNumber == 2:
        print("28 or 29 days")
    elif (get_mNumber <= 7 and get_mNumber % 2 == 0) or (get_mNumber >= 8 and get_mNumber % 2 == 1):       
        print("30 days")
    elif (get_mNumber <= 7 and get_mNumber % 2 == 1) or (get_mNumber >= 8 and get_mNumber % 2 == 0):
        print("31 days")