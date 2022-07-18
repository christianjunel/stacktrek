# CHAPTER 3A

##########SOLUTION 1

DRESSERS_PRICE = 50
ORGANIZERS_PRICE = 125

dress_orders = int(input("How many dress would you like to order?: "))
org_orders = int(input("How many organizers would you like to order?: "))
print(f"The total weight accumulated is: {(dress_orders * DRESSERS_PRICE) + (org_orders * ORGANIZERS_PRICE)}")