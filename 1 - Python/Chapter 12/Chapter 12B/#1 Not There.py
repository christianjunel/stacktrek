class NumberFinder:
    def __init__(self, size):

        self.hash_table = [None] * size
        
    def hash_code(self, key):

        squared_key = key * key
        string_key = str(squared_key)
        length = len(str(squared_key))
        mid = length // 2

        code = ""
        first_half = string_key[:mid]
        second_half = string_key[mid:]

        if length % 2 != 0:
            code += second_half[0]
        else:
            code += first_half[-1]
            code += second_half[0]

        return int(code)
        # square_root = key**2
        # if len(str(square_root)) % 2 == 1: #Get middle number when square root is odd
        #     return int(str(square_root)[len(str(square_root)) // 2])
        # else: #Get 2 digits in the middle when square root is even
        #     if len(str(square_root)) == 2: #Return square root when square root length is only 2
        #         return square_root
        #     else:
        #         return int(str(square_root)[1:-1])

    def add(self, number):
        # If there are no collisions, return the hash index, otherwise, return the number that has been collided.
        if self.hash_table[self.hash_code(number)] != None:
            return self.hash_table[self.hash_code(number)]

        self.hash_table[self.hash_code(number)] = number
        return self.hash_code(number)

finder = NumberFinder(30)
print(finder.add(15))
print(finder.add(45)) 