###########SOLUTION 2

egg_orders = int(input("How many eggs would you like to order?: "))
egg_calculation = divmod(egg_orders, 12)

# not_in_dozen_total = egg_calculation[0] * 7
# count_per_dozen_total = egg_calculation[1] * 70

print(egg_calculation[0] * 70 + egg_calculation[1] * 7)