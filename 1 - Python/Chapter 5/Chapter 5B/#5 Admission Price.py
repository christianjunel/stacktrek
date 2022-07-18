
age_less_than_3_price = 0.00
age_3_12_price = 14.00
age_13_64_price = 23.00
age_65_over_price = 18.00
total_admission = 0.00

admitting = True

while admitting:

    age = str(input("Please enter the guest's age: "))
    if age.isnumeric():
        age_int = int(age)
        if age_int < 3:
            total_admission += age_less_than_3_price
        elif age_int >= 65:
            total_admission += age_65_over_price
        elif age_int >= 3 and age_int <= 12:
            total_admission += age_3_12_price
        else:
            total_admission += age_13_64_price
    elif age == "end":
        admitting = False
        break
    else:
        print("Please only input integers.")
        admitting = False

print(f"{total_admission:.2f}")