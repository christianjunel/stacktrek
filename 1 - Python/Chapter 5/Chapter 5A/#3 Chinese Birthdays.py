shem_age = int(input("How old is Shem?: ")) 
washing_machine_cost = float(input("How much is the washing machine?: "))
toys_price = float(input("How much are his toys?: "))

money_earned = 0
multiplier = 0
BROTHER_STEAL = 1
toys_total_price = 0


for age in range(1, shem_age+1):
    if age % 2 == 0:
        multiplier += 1
        money_earned += 10*(multiplier)
        money_earned -= BROTHER_STEAL
    else:
        toys_total_price += toys_price
    
total_money_earned = toys_total_price + money_earned

if washing_machine_cost < total_money_earned:
    print(f"Yes! you still have {total_money_earned - washing_machine_cost:.2f} left")
elif total_money_earned < washing_machine_cost:
    print(f"No! you still need {washing_machine_cost-total_money_earned:.2f}")