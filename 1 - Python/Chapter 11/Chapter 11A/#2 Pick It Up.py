class PickItUp:
    @classmethod
    def sort(cls, array):
        for iter_num in range(len(array) - 1, 0, -1):
            for i in range(iter_num):
                if array[i] > array[i+1]:
                    temp = array[i]
                    array[i] = array[i+1]
                    array[i+1] = temp
        return [item.name for item in array]

class Item:
    def __init__(self, name, mass):
        self.name = name
        self.mass = mass
        self.GRAVITY = 9.8

    def weight(self):
        return (self.mass/1000) * self.GRAVITY
    # def __repr__(self):
    #     return f"'{self.name}'"
    def __lt__(self, other):
        return self.weight() > other.weight()

item1 = Item("pen", 30)
item2 = Item("bookstand", 350)
item3 = Item("books", 850)
item4 = Item("ruler", 65)
item5 = Item("laptop", 2300)
basket = [item1, item2, item3, item4, item5]
print(PickItUp.sort(basket))
# print(item1.weight())