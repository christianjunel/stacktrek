
starting_base = int(input("Starting base: "))
ending_base = int(input("Ending base: "))
ending_power = int(input("Ending power: "))

for m in range(starting_base, ending_base+1):
    for p in range(2, ending_power+1):
        if p == ending_power:
            print(m**p, end="")
        else:
            print(m**p, end=", ")
    print()
