def commoncharacters(w1,w2):
    word1 = set(w1)
    word2 = set(w2)
    no_of_same_chars = len(word1 & word2)
    check(no_of_same_chars)
    if no_of_same_chars == 1:
        return f"The words have one character in common"
    elif no_of_same_chars > 1:
        return f"The words have {no_of_same_chars} characters in common"
    else:
        return f"The words have no character in common"
    
def check(num):
    global number
    number = num
    return

print(commoncharacters('happened','head'))
print(number)
