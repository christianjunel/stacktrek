
magnitude = float(input("What's the earthquake magnitude?: "))

if magnitude <= 0:
    print("Please enter a valid magnitude number.")
else:
    if magnitude < 2.0:
        print("Micro")
    elif magnitude >= 2.0 and magnitude < 3.0:
        print("Very minor")
    elif magnitude >= 3.0 and magnitude < 4.0:
        print("Minor")
    elif magnitude >= 4.0 and magnitude < 5.0:
        print("Light")
    elif magnitude >= 5.0 and magnitude < 6.0:
        print("Moderate")
    elif magnitude >= 6.0 and magnitude < 7.0:
        print("Strong")
    elif magnitude >= 7.0 and magnitude < 8.0:
        print("Major")
    elif magnitude >= 8.0 and magnitude < 10.0:
        print("Great")
    elif magnitude >= 10.0:
        print("Meteoric")