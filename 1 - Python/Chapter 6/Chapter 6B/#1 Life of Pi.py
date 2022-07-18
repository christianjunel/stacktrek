def gregoryLeibnitz(num):
    ans = 0.00
    sign = -1
    for p in range(1, num*2, 2):
        print(p)
        sign *= -1
        ans += sign*(1/p)
    return 4 * ans

print(gregoryLeibnitz(20))

