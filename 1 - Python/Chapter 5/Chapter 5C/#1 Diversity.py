

count_m = 0
count_f = 0

enrollees = int(input("How many enrollees?: "))

while enrollees != 0:
    gender = str(input("What's the gender? (m/f): "))

    if gender.isalpha and gender.lower() == "m":
        count_m += 1
        enrollees -= 1
    elif gender.isalpha and gender.lower() == "f":
        count_f += 1
        enrollees -= 1
    else:
        print("Please enter a valid input.")
        continue
    if enrollees == 0:  
        if count_m == 0:
            print(f"Males: {count_m}\nFemales: {count_f}\nAll females")
        elif count_f == 0:
            print(f"Males: {count_m}\nFemales: {count_f}\nAll males")
        else:
            if count_m < count_f:
                large = count_f
                small = count_m
            else:
                large = count_m
                small = count_f
            r = 1
            q = 0
            gcd = 0
            finding_gcd = True
            #Using the Euclidian Algorithm
            while finding_gcd:

                q = large//small
                r = large % (small*q)
                if r > 0:
                    large = small
                    small = r
                elif r == 0:
                    gcd = small
                    finding_gcd = False
                    break          
            print(f"Males: {count_m}\nFemales: {count_f}\n{int(count_m/gcd)}:{int(count_f/gcd)}")

