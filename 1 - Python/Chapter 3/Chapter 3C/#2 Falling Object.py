import math as m

GRAVITY = 9.8
INITIAL_VELOCITY = 0

distance = int(input("What's the height? (in m): "))
final_velocity = "{:.2f}".format(INITIAL_VELOCITY + m.sqrt(2 * GRAVITY * distance))
print(final_velocity)