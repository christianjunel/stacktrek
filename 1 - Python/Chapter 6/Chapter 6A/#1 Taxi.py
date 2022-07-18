

# def taxi(distance):
#     BASE_FARE = 4.00
#     EVERY_140_METERS_TRAVELED = 0.25
#     return f"{BASE_FARE + ((distance // 140.00)*EVERY_140_METERS_TRAVELED):.2f}"

# print(taxi(5))
# print(taxi(544))
# print(taxi(721))

def taxi(distance):
    BASE_FARE = 4.00
    EVERY_140_METERS_TRAVELED = 0.25
    distance /= 140
    if distance > 1:
        return f"{BASE_FARE + (distance*EVERY_140_METERS_TRAVELED):.2f}"
    else:
      	return f"{BASE_FARE:.2f}"
print(taxi(544))