class MasterCheffy:
    def __init__(self):
        self.leftovers = []
        self.ingredients = []

    def store_leftover(self, leftover):
        # if leftover.lower() not in self.leftovers:
        self.leftovers.append(leftover.lower()) 

    def get_leftovers(self):
        return self.leftovers

    def get_ingredients(self, quantity):
        self.ingredients = []
        if quantity <= len(self.leftovers):
            for i in range(0, quantity, 1):
                # if self.ingredients
                self.ingredients.append(self.leftovers[i])
            while quantity != 0:
                self.leftovers.remove(self.leftovers.copy()[0])
                quantity -= 1
            return self.ingredients
        else:
            return self.leftovers

master_cheffy = MasterCheffy()
master_cheffy.store_leftover("a")
master_cheffy.store_leftover("b")
master_cheffy.store_leftover("c")
master_cheffy.store_leftover("d")
master_cheffy.store_leftover("e")

print(master_cheffy.get_ingredients(2)) #leftover will become cde
master_cheffy.store_leftover("f")
master_cheffy.store_leftover("g")
print(master_cheffy.get_ingredients(4)) #expected output should be cdefg

# print(master_cheffy.get_ingredients(6))
# print(master_cheffy.get_leftovers())
# print(master_cheffy.get_ingredients(2))
# print(master_cheffy.get_ingredients(4))
# print(master_cheffy.get_ingredients(4))