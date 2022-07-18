year_animals = ("Dragon", "Snake", 
    "Horse", "Sheep", 
    "Monkey", "Rooster", 
    "Dog", "Boar", 
    "Rat", "Ox", 
    "Tiger", "Hare")

year = int(input("Enter year: "))
if (year >= 0):
    index_calc = year - 2000 
    if(index_calc < 0):
        index_point = index_calc % -12
        print(year_animals[index_point])
    elif(index_calc >= 0):
        index_point = index_calc % 12
        print(year_animals[index_point])
else:
    print("Please enter a valid year.")