class Package:

    def __init__(self, weight, distance):
        self._weight = weight
        self._distance = distance
        
    @property
    def get_weight(self):
        return self._weight
        

    @get_weight.setter
    def weight(self, value):
        self._weight = value
        

    @property
    def get_distance(self):
        return self._distance
        

    @get_distance.setter
    def distance(self, value):
        self._distance = value
        

    @property
    def shipping_fee(self):
        if self.get_distance > 100:
            return round(((self.get_distance // 100) * 50) + ((self.get_distance % 100) * 1.50), 2)
        elif self.get_distance < 100 and self.get_distance > 1:
            return 45
        else:
            return 0
        
    @property
    def added_shipping_tax(self):
        if self.get_weight > 1:
            return self._weight * 0.25
        else:
            return 0
        
    @property
    def total_shipping_fee(self):
        return round(self.added_shipping_tax + self.shipping_fee, 2)
        

p = Package(-1.5, 0)
# print(p._distance)
# print(p.distance)
# print(p.get_distance)
print(p.shipping_fee)
print(p.added_shipping_tax)
print(p.total_shipping_fee)