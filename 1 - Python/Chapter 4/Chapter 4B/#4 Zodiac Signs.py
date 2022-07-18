day = int(input("Enter day: "))
month = str(input("Enter month: "))
month_list = ['january', 'february',
    'march', 'april', 'may','june',
    'july', 'august', 'september',
    'october', 'november', 'december']

if day <= 0 or month not in month_list:
    print("Incorrect input. Please try again.")
else:

    if ((month.lower() == "january" and day <= 19 and day > 0) or
    (month.lower() == "december" and day <= 31 and day >= 22)):
        print("Your Astrological sign is : Capricorn")

    if ((month.lower() == "january" and day >= 20 and day <= 31) or
    (month.lower() == "february" and day <= 18 and day > 0)):
        print("Your Astrological sign is : Aquarius")

    if ((month.lower() == "february" and day >= 19 and day <= 29) or
    (month.lower() == "march" and day <= 20 and day > 0)):
        print("Your Astrological sign is : Pisces")

    if ((month.lower() == "march" and day >= 21 and day <= 31) or
    (month.lower() == "april" and day <= 19 and day > 0)):
        print("Your Astrological sign is : Aries")

    if ((month.lower() == "april" and day >= 20 and day <= 30) or
    (month.lower() == "may" and day <= 20 and day > 0)):
        print("Your Astrological sign is : Taurus")

    if ((month.lower() == "may" and day >= 21 and day <= 31) or
    (month.lower() == "june" and day <= 20 and day > 0)):
        print("Your Astrological sign is : Gemini")

    if ((month.lower() == "june" and day >= 21 and day <= 30) or
    (month.lower() == "july" and day <= 22 and day > 0)):
        print("Your Astrological sign is : Cancer")

    if ((month.lower() == "july" and day >= 23 and day <= 31) or
    (month.lower() == "august" and day <= 22 and day > 0)):
        print("Your Astrological sign is : Leo")

    if ((month.lower() == "august" and day >= 23 and day <= 31) or
    (month.lower() == "september" and day <= 22 and day > 0)):
        print("Your Astrological sign is : Virgo")

    if ((month.lower() == "september" and day >= 23 and day <= 30) or
    (month.lower() == "october" and day <= 22 and day > 0)):
        print("Your Astrological sign is : Libra")

    if ((month.lower() == "october" and day >= 23 and day <= 31) or
    (month.lower() == "november" and day <= 21 and day > 0)):
        print("Your Astrological sign is : Scorpio")

    if ((month.lower() == "november" and day >= 22 and day <= 30) or
    (month.lower() == "december" and day <= 21 and day > 0)):
        print("Your Astrological sign is : Sagittarius")