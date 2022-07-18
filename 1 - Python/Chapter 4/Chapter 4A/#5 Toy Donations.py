puzzle = 14
talking_doll = 3
teddy_bear = 20.2
pokemon_plushie = 8.20
big_toy_truck = 10.65

get_TargetDonation = float(input("Target Donation: "))
get_Puzzles = float(input("# of Puzzles: "))
get_TalkingDolls = float(input("# of Talking Doll: "))
get_TeddyBears = float(input("# of Teddy Bears: "))
get_PokemonPlushies = float(input("# of Pokemon Plushies "))
get_BigToyTrucks = float(input("# of Big Toy Trucks: "))

no_of_orders = [get_Puzzles, get_TalkingDolls,
    get_TeddyBears, get_PokemonPlushies,
    get_BigToyTrucks]

per_orders_Total = [get_Puzzles * puzzle,
    get_TalkingDolls * talking_doll,
    get_TeddyBears * teddy_bear,
    get_PokemonPlushies * pokemon_plushie,
    get_BigToyTrucks * big_toy_truck]

total_Profit = sum(per_orders_Total)
total_Profit -= total_Profit * 0.10 #for rent

if sum(no_of_orders) >= 50:
    total_Profit -= total_Profit * 0.25 #for discount
    if (get_TargetDonation < total_Profit):
        money_Left = "{:.2f}".format(total_Profit - get_TargetDonation)
        print(f"Yes! {money_Left} dollars left.")
    elif (get_TargetDonation > total_Profit):
        money_Needed = "{:.2f}".format(get_TargetDonation - total_Profit)
        print(f"Not enough money! {money_Needed} dollars needed.")
else:
    if (get_TargetDonation < total_Profit):
        money_Left = "{:.2f}".format(total_Profit - get_TargetDonation)
        print(f"Yes! {money_Left} dollars left.")
    elif (get_TargetDonation > total_Profit):
        money_Needed = "{:.2f}".format(get_TargetDonation - total_Profit)
        print(f"Not enough money! {money_Needed} dollars needed.")