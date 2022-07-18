def gcd(n,m):
    if n < m:
        large = m
        small = n
    else:
        large = n
        small = m
    r = 1
    q = 0
    gcd = 0
    finding_gcd = True
    #Using the Euclidian Algorithm
    while finding_gcd:

        q = large//small
        r = large % (small*q)
        if r > 0:
            large = small
            small = r
        elif r == 0:
            gcd = small
            finding_gcd = False
            break          
    return int(gcd)

def reduce(num, den):
    global reduced_list
    reduced_list = []
    reduced_list.append(int(num/gcd(num, den)))
    reduced_list.append(int(den/gcd(num, den)))

def display(num, den):
    reduce(num, den)
    return f"{num}/{den} can be reduced to {reduced_list[0]}/{reduced_list[1]}."

print(display(4,100))
