def calculate(a, b):
    if a < b:
        large = b
        small = a
    else:
        large = a
        small = b
    if b == 0:
        return a
    else:
        q = large//small
        c = large % (small*q)
        if c > 0:
            large = small
            small = c
            return calculate(large, small)
        elif c == 0:
            return small

print(calculate(101, 2))