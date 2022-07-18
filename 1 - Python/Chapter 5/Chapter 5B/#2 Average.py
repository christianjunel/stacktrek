
entering_grades = True
sum = 0
count = 0

while entering_grades:
    
    grade = int(input("Enter a grade: "))
    if grade == 0 and count == 0:
        print("No entries")
        entering_grades = False
    else:
        if grade == 0:
            entering_grades = False
        else:
            count += 1
            sum += grade

average = int(sum/count)
print(average)