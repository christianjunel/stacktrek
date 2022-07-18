def editDistance(s,t):
    if len(s) == 0:
        return len(t)
    elif len(t) == 0:
        return len(s)
    else:
        cost = 0
    # elif s == t:
    #     return 0
    if s[-1] != t[-1]:
        cost = 1
    return min(editDistance(s[:-1], t) + 1, editDistance(s, t[:-1]) + 1, editDistance(s[:-1], t[:-1]) + cost)

def display(s,t):
    return f"The edit distance between {s} and {t} is {editDistance(s,t)}"

print(display('kitten','sitting'))
print(display('bake','bake'))