import math as m

side_a = float(input("What's the length of side A?: "))
side_b = float(input("What's the length of side B?: "))

side_c = m.sqrt(side_a**2 + side_b**2)
float_side_c = round(side_c, 3)

print(f"The length of the diagonal is {float_side_c}.")