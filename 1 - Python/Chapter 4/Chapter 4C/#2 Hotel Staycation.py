mayoct_deluxe = 100.00
mayoct_premium = 85.00
julysep_deluxe = 112.50
julysep_premium = 90.58
juneaug_deluxe = 125.66
juneaug_premium = 100.50

month = str(input("What month is your staycation? "))
if month[0].isupper():
    no_of_nights = float(input("For how many nights?: "))
    if no_of_nights < 0 or no_of_nights % int(no_of_nights != 0):
        print("You cannot enter negative or float numbers.")       
    else:
        if month.lower() == 'may' or month.lower() == 'october':
            if no_of_nights > 7 and no_of_nights <= 14:
                deluxe_price = no_of_nights * mayoct_deluxe
                deluxe_price -= deluxe_price * 0.05
                premium_price = no_of_nights * mayoct_premium
                print(f"Deluxe: {deluxe_price:.2f} dollars\nPremium: {premium_price:.2f} dollars")   
            elif no_of_nights > 14:
                deluxe_price = no_of_nights * mayoct_deluxe
                deluxe_price -= deluxe_price * 0.30
                premium_price = no_of_nights * mayoct_premium
                premium_price -= premium_price * 0.10
                print(f"Deluxe: {deluxe_price:.2f} dollars\nPremium: {premium_price:.2f} dollars")   
            else:
                deluxe_price = no_of_nights * mayoct_deluxe
                premium_price = no_of_nights * mayoct_premium
                print(f"Deluxe: {deluxe_price:.2f} dollars\nPremium: {premium_price:.2f} dollars")
        elif month.lower() == 'july' or month.lower() == 'september':    
            if no_of_nights > 14:
                deluxe_price = no_of_nights * julysep_deluxe
                deluxe_price -= deluxe_price * 0.20
                premium_price = no_of_nights * julysep_premium
                premium_price -= premium_price * 0.10
                print(f"Deluxe: {deluxe_price:.2f} dollars\nPremium: {premium_price:.2f} dollars")   
            else:
                deluxe_price = no_of_nights * julysep_deluxe
                premium_price = no_of_nights * julysep_premium
                print(f"Deluxe: {deluxe_price:.2f} dollars\nPremium: {premium_price:.2f} dollars")
        elif month.lower() == 'june' or month.lower() == 'august':             
            if no_of_nights > 14:
                deluxe_price = no_of_nights * juneaug_deluxe
                premium_price = no_of_nights * juneaug_premium
                premium_price -= premium_price * 0.10
                print(f"Deluxe: {deluxe_price:.2f} dollars\nPremium: {premium_price:.2f} dollars")   
            else:
                deluxe_price = no_of_nights * juneaug_deluxe
                premium_price = no_of_nights * juneaug_premium
                print(f"Deluxe: {deluxe_price:.2f} dollars\nPremium: {premium_price:.2f} dollars")
        else:
            print("Please enter a valid input.")
else:
    print("Please capitalize your month upon inputting.")