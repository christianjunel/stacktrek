from math import sqrt

x1 = int(input("X1 (Archer): "))
y1 = int(input("Y1 (Archer): "))
x2 = int(input("X2:(Penguin): "))
y2 = int(input("Y2:(Penguin): "))

# distance = "{:.2f}".format(m.dist([x1, y1], [x2, y2])) #-> this can also be used to make your life easier, I think...

distance = "{:.2f}".format(sqrt((x2-x1)**2 + (y2-y1)**2))
print(distance)