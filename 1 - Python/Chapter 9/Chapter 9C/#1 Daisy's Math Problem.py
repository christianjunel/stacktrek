class Counter:
    def __init__(self, number):
        self.number = number
        self.numset = set()
        self.numset_even = set()
        self.numset_odd = set()
        self.numset_divby3 = set()
        for i in range(1, self.number + 1):
            self.numset.add(i)
            if i % 2 == 1:
                self.numset_odd.add(i)
            if i % 2 == 0:
                self.numset_even.add(i)
            if i % 3 == 0:
                self.numset_divby3.add(i)        

    def numbers_divisible_by_three(self):
        return self.numset_divby3

    def odd_numbers(self):
        return self.numset_odd

    def even_numbers(self):
        return self.numset_even

    def even_numbers_intersection(self):
        return set(self.numset_even & self.numset_divby3)

    def odd_numbers_intersection(self):
        return set(self.numset_odd & self.numset_divby3)

counter = Counter(20)
print(counter.odd_numbers())
print(counter.even_numbers())
print(counter.numbers_divisible_by_three())
print(counter.even_numbers_intersection())
print(counter.odd_numbers_intersection())