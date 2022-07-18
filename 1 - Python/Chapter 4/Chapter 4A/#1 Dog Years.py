###########SOLUTION 1

#First 2 human years = 10.5 dog years each
#And count each additionl human years as 4 dog years

get_human_years = float(input("How old are you, human?: "))
human_year = get_human_years
FIRST_TWO_HUMAN_YEARS = 10.5
SUCCEEDING_HUMAN_YEAR = 4

if(human_year <= 2 and human_year > 0):
    dog_years = human_year * FIRST_TWO_HUMAN_YEARS
    print(dog_years)
elif(human_year > 2):
    human_year -= 2
    dog_years = (human_year*4) + (FIRST_TWO_HUMAN_YEARS*2)
    print(int(dog_years))
else:
    print("Please enter a valid human year.")