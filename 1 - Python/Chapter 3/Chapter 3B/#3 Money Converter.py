get_amount = float(input("Put amount in cents: "))
amount = float(get_amount/100)

# print(amount, "consists of:")

dollars = int(get_amount // 100)
# print("Dollars:", dollars)

cents_remaining = int(get_amount % 100) #get the remainder of 1156/100
quarters = int(cents_remaining // 25) #get the floor division of 56/25 = 2 , repeat process for dimes, nickels, and pennies.
# print("Quarters:", quarters)         
for_dimes = int(cents_remaining % 25) 
dimes = int(for_dimes // 10) 
# print("Dimes:", dimes)
for_nickels = int(for_dimes % 10)
nickels = int(for_nickels // 5)
# print("Nickels:", nickels)
for_pennies = int(for_nickels % 5)
pennies = int(for_pennies // 1)
# print("Pennies:", pennies)

print(f'{amount} consists of:\nDollars: {dollars}\nQuarters: {quarters}\nDimes: {dimes}\nNickels: {nickels}\nPennies: {pennies}')