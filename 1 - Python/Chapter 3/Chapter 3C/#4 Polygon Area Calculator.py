from math import pi, tan

length_of_sides = int(input("What's the length of all sides?: "))
no_of_sides = int(input("How many sides are there?: "))

area_of_polygon = "{:.2f}".format((length_of_sides**2 * no_of_sides) / (4*tan (pi/no_of_sides)))
print(area_of_polygon)