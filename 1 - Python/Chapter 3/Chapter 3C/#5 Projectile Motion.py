from math import cos, sin, pi, radians

GRAVITY = 9.81

v0 = float(input("Initial Velocity is: ")) # how hard the slingshot is pulled
inp_angle = float(input("Angle is: "))
angle = radians(inp_angle) # angle of the slingshot - convert angle to radians
inp_t= float(input("Seconds of flight is: "))
t = inp_t # seconds since being released from the slingshot 
x = round(v0*cos(angle)*t, )
y = round(((v0*sin(angle)*t) - (GRAVITY*t**2)/2), )

coordinates = x,y
print(f"{coordinates[0]}, {coordinates[1]}") 
#print("The coordinates are:", str(coordinates[0]) +", "+ str(coordinates[1])) # without parenthesis