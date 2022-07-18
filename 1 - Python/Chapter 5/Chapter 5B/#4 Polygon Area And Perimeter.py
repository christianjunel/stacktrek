from math import sqrt

# distance = sqrt(((x2-x1)**2 + (y2-y1)**2)) + sqrt((x3-x2)**2 + (y3-y2)**2) + sqrt((x1-x3)**2 + (y1-y3)**2)
# area = 0.5 * abs((x1*y2 - y1*x2) + (x2*y3 - y2*x3) + (x3*y1 - y3*x1))
# print(area)

user_inputs = True
area_operand = 0.00
perimeter = 0.00
validator_count = 0
x_coordinate_first = 0
y_coordinate_first = 0
x_coordinate_before = 0
y_coordinate_before = 0

while user_inputs: 

    x_coordinate_current = str(input("Enter X-Coordinate: "))
    if x_coordinate_current.isnumeric():
        validator_count += 1
        y_coordinate_current = str(input("Enter Y-Coordinate: "))
        if y_coordinate_current.isnumeric:
            validator_count += 1
            if validator_count == 2:
                x_coordinate_first = int(x_coordinate_current)
                y_coordinate_first = int(y_coordinate_current)
                x_coordinate_before = int(x_coordinate_current)
                y_coordinate_before = int(y_coordinate_current)
            elif validator_count >= 4:
                area_operand += (int(x_coordinate_before)*int(y_coordinate_current)) - (int(y_coordinate_before)*int(x_coordinate_current))
                perimeter += sqrt((int(x_coordinate_current) - int(x_coordinate_before))**2 + ((int(y_coordinate_current) - int(y_coordinate_before))**2))
                x_coordinate_before = int(x_coordinate_current)
                y_coordinate_before = int(y_coordinate_current)
                
        else:
            print("You cannot enter a string or stop here.")
            user_inputs = False
            break
        # distance = sqrt(((x2-x1)**2 + (y2-y1)**2)) + sqrt((x3-x2)**2 + (y3-y2)**2) + sqrt((x1-x3)**2 + (y1-y3)**2)
        
    elif x_coordinate_current.lower() == "stop" and validator_count >= 6:
        area_operand += (int(x_coordinate_before)*int(y_coordinate_first)) - (int(y_coordinate_before)*int(x_coordinate_first))
        perimeter += sqrt((int(x_coordinate_first) - int(x_coordinate_before))**2 + (int(y_coordinate_first) - int(y_coordinate_before))**2)
        area = 0.5 * abs(area_operand)
        print(f"Perimeter: {perimeter}\nArea: {area}")
        user_inputs = False
        
    else:
        print("You cannot enter a string or stop before the third set of coordinates.")
        user_inputs = False
        break
    
        
    

