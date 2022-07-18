class NumberList:
    def __init__(self, numbers:list, factor:int):
        self.numbers = numbers
        self.factor = factor

    def find_smallest_divisible(self):
        numbers_ = list()
        if self.factor > 0:
            for items in self.numbers:
                if items % self.factor == 0:
                    numbers_.append(items)
            if len(numbers_) == 0:
                return -1
            else:
                return min(numbers_)
        else:
            return -1
                
numberList = NumberList([1, 2, 3, 8, 0, 21, 88], 3)
print(numberList.find_smallest_divisible())
numberList = NumberList([-72, 81, -36, -106, 42], 7)
print(numberList.find_smallest_divisible())
numberList = NumberList([1, 10, -2, -67, 4], 8)
print(numberList.find_smallest_divisible())
numberList = NumberList([1, 10, -2, -67, 4], 0)
print(numberList.find_smallest_divisible())