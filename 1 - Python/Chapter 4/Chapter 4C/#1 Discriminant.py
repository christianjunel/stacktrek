from math import sqrt

a = float(input("A: "))
b = float(input("B: "))
c = float(input("C: "))

sqrt_operand = (b**2) - (4*a*c)

if a == 0 and b == 0:
    print("There is not even an unknown in this equation!")
elif sqrt_operand < 0:
    print("There are no solutions")
elif sqrt_operand == 0:
    solution_1 = (- b + (sqrt(sqrt_operand))) / (2*a)
    print(f"There is one solution , namely {solution_1}")
else:   
    solution_1 = (- b + (sqrt(sqrt_operand))) / (2*a)
    solution_2 = (- b - (sqrt(sqrt_operand))) / (2*a)
    print(f"There are two solutions , namely {solution_1} and {solution_2}")