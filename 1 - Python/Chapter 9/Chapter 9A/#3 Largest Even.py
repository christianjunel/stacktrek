# class NumberList:
#     def __init__(self, numbers:list):
#         self.numbers = numbers
    
#     def find_values(self):
#         largest = 0
#         index = 0
#         evens_list = []
#         for i, number in enumerate(self.numbers):
#             if number % 2 == 0: 
#                 evens_list.append(number)
#                 if i == 0:
#                     largest = number
#                 elif number >= largest and number >= 0:
#                     largest = number
#                     index = i

#         if len(evens_list) == 0:              
#             return 
#         elif largest < 0:  
#             return 
#         elif len(evens_list) == evens_list.count(evens_list[0]):
#             return f"{largest} at index {0}"
#         elif len(evens_list) != 0 and largest >= 0 and len(evens_list) != evens_list.count(evens_list[0]):  
#             return f"{largest} at index {index}"
#         else:
#             return

# numberList = NumberList([6, 21, 15, 36, 0, 2, 12])
# print(numberList.find_values())
# numberList = NumberList([-20, 4, 46, -50, -8, 0])
# print(numberList.find_values())
# numberList = NumberList([-2, -4, 0])
# print(numberList.find_values())
# numberList = NumberList([2, 2, 2])
# print(numberList.find_values())
# numberList = NumberList([1, 1, 1])
# print(numberList.find_values())
# numberList = NumberList([-2, -2, 0])
# print(numberList.find_values())

class NumberList:
    def __init__(self, numbers:list):
        self.numbers = numbers
        self.answer = None
    
    def find_values(self):
        largest = -1
        
        if not self.numbers:
          return
    
        for i, number in enumerate(self.numbers):
            if number % 2 == 0 and number > largest:
              largest = number
              self.answer = f"{largest} at index {i}"
        return self.answer
                

numberList = NumberList([6, 21, 15, 36, 0, 2, 12])
print(numberList.find_values())
numberList = NumberList([-20, 4, 46, -50, -8, 0])
print(numberList.find_values())
numberList = NumberList([-1, -2, 0, -5, -20, -12])
print(numberList.find_values())

