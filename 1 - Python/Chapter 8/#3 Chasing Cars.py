class Car:

    def __init__(self, brand_name, kilometers, liters):
        self.brand_name = brand_name
        self.kilometers = kilometers
        self.liters = liters

    def calculate_mpg(self):
        return round(((self.kilometers * 1.609344)) / ((self.liters * 4.54609)), 2)

    def calculate_rate_of_gas(self, price):
        self.price = price
        rate_of_gas = float(self.price) / float(self.calculate_mpg())
        return round(rate_of_gas, 2)

c = Car("BMW I8 Roadster", 40, 1.5)
print(c.calculate_mpg())
print(c.calculate_rate_of_gas(250))