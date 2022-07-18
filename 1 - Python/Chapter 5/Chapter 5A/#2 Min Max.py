
highest = 0
lowest = 0
can_div_by_3 = 0

for i in range(10):

    inp_num = int(input(f"Enter number {i+1}: "))

    if inp_num > highest:
        highest = inp_num
    if lowest == 0:
        lowest = inp_num
    elif inp_num < lowest:
        lowest = inp_num
    if inp_num % 3 == 0:
        can_div_by_3 += 1

print(f"Highest: {highest}\nLowest: {lowest}\n{can_div_by_3} numbers divisible by 3")