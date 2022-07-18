
principal = float(input("Principal amount: "))
interest = float(input("Interest: "))
no_of_years = int(input("Number of years: "))

total = principal * (1 + interest / 100)**no_of_years
print(f"{total:.2f}")