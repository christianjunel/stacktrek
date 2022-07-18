plan_CallMins = 60
plan_Texts = 100
emergency_Fee = 25.00
monthly_Plan = 799.00

calls = int(input("Enter your call minutes: "))
texts = int(input("Enter your text messages: "))

if calls < 0 or texts < 0:
    print("Please input valid values. No negative numbers.")
else:
    call_chargeExcess = 0.00
    sms_chargeExcess = 0.00
    total_Bill = 0.00

    if calls > plan_CallMins:
        excess_Min = calls - plan_CallMins
        call_chargeExcess += excess_Min * 6.50

    if texts > plan_Texts:
        excess_SMS = texts - plan_Texts
        sms_chargeExcess += excess_SMS * 1.00

    total_Bill = monthly_Plan + emergency_Fee + call_chargeExcess + sms_chargeExcess
    tax = total_Bill * 0.05
    total_Bill += tax

    print("Call minutes: {:.1f}\nText messages: {:.1f}\nExcess minute charges: {:.2f}\nExcess SMS charges: {:.2f}\n911 fee: 25.00\nTax: {:.2f}\nTotal bill: {:.2f}"
    .format(calls, texts, call_chargeExcess, sms_chargeExcess, tax, total_Bill))