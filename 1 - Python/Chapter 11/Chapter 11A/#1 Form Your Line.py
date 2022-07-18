def sort(elements):
    # for iter_num in range(len(elements) - 1, 0, -1):
    #     for i in range(iter_num):
    #         if elements[i] > elements[i+1]:
    #             temp = elements[i]
    #             elements[i] = elements[i+1]
    #             elements[i+1] = temp
    for iter_num in range(len(elements) - 1, 0, -1):
        for i in range(iter_num):
            if elements[i] > elements[i+1]:
                temp = elements[i]
                elements[i] = elements[i+1]
                elements[i+1] = temp
    return elements
    
height = [8, 9, 7, 5, 11]
print(sort(height))