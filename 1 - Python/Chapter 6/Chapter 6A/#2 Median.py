

def median(a,b,c):
    lowest = 0
    highest = 0
    median = 0
    
    if a < b:
        lowest = a
    else:
        lowest = b
    if c < lowest: 
        lowest = c
    if a > b:
        highest = a
    else:
        highest = b
    if c > highest:
        highest = c
        
    median = (a + b + c) - lowest - highest
    return median

def alternate_median(a,b,c):
    numbers_list_median = []
    numbers_list_median.append(a)
    numbers_list_median.append(b)
    numbers_list_median.append(c)
    numbers_list_median.sort()
    median_index = int((len(numbers_list_median)+1) / 2)
    return numbers_list_median[median_index-1] + 2
    
def printx(a,b,c):
    return f"The median value is {median(a,b,c)} and the value for the alternate median function is {alternate_median(a,b,c)}"


print(printx(1,5,7))