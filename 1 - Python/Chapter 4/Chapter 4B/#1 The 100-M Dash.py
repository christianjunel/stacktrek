import time as t

athelete_1 = int(input("Athlete 1 (time in seconds): "))
athelete_2 = int(input("Athlete 2 (time in seconds): "))
athelete_3 = int(input("Athlete 3 (time in seconds): "))

if (athelete_1 < 1 or
    athelete_1 > 50 or
    athelete_2 < 1 or
    athelete_2 > 50 or
    athelete_3 < 1 or
    athelete_3 > 50):
    print("Please input a number between 1 and 50 only.")

else:
    total_Seconds = athelete_1 + athelete_2 + athelete_3
    converted_Time = t.localtime(total_Seconds)
    print(f"{converted_Time.tm_min}:{converted_Time.tm_sec}")