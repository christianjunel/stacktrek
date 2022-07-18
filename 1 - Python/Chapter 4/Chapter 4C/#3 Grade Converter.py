grade = float(input("Enter grade: "))

if grade > 10:
    print("Maximum grade up to 10 only.")
elif grade < 0:
    print("Negative inputs are not allowed.")
else:
    if grade % .5 == 0:
        if grade >= 8.5 and grade <= 10:
            print("Grade A")
        elif grade >= 7.5 and grade <= 8:
            print("Grade B")
        elif grade >= 6.5 and grade <= 7:
            print("Grade C")
        elif grade >= 5.5 and grade <= 6:
            print("Grade D")
        else:
            print("Grade F")
    else:
        print("Grades should be rounded to the nearest half point.")