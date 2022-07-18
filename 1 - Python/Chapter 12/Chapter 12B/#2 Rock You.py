class Rock:
    def __init__(self, color, count):
        self.color = color
        self.count = count


class RockShelf:
    def __init__(self, size):
        self.size = size
        self.rock_shelf = [None] * self.size

    def hash_code(self, key):
        h = 0
        for char in key:
            h += ord(char)
        return h % self.size
        #return sum(ord(char) for char in key) % self.size

    def insert(self, item):
        color = item.color.lower()
        count = item.count
        hash_index = self.hash_code(color)
        
        while self.rock_shelf[hash_index]:
          initial_count = self.rock_shelf[hash_index].count
          if self.rock_shelf[hash_index].color.lower() == color:
            self.rock_shelf[hash_index].count = initial_count + count
            return
          hash_index += 1
        
        self.rock_shelf[hash_index] = item
        

    def search(self, color):
        hash_index = self.hash_code(color)
        
        while self.rock_shelf[hash_index]:
          if self.rock_shelf[hash_index].color.lower() == color.lower():
            return self.rock_shelf[hash_index].count
          hash_index += 1
        return 0

rock1 = Rock("green", 5)
rock2 = Rock("orange", 1)
rock3 = Rock("BLUE", 12)
rock4 = Rock("RED", 2)
rock5 = Rock("green", 5)

shelf = RockShelf(15)

shelf.insert(rock1)
shelf.insert(rock2)
shelf.insert(rock3)
shelf.insert(rock4)
shelf.insert(rock5)

print(shelf.search("blue"))