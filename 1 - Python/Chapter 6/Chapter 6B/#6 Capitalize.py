def capitalize(str:str):
    sentence = str
    proper_sentence = ""

    for i in range(0,len(sentence)):
        if i == 0:
            proper_sentence += sentence[i].upper()
        elif sentence[i] == 'i' and sentence[i-1] == " " and sentence[i+1] == " ":
            proper_sentence += sentence[i].upper()
        elif (sentence[i-2] == "?" and sentence[i-1] == " ") or (sentence[i-2] == "." and sentence[i-1] == " ") or (sentence[i-2] == "!" and sentence[i-1] == " "):
            proper_sentence += sentence[i].upper()
        elif sentence[i-1] == "?"  or sentence[i-1] == "." or sentence[i-1] == "!":
            proper_sentence += sentence[i].upper()
        else:
            proper_sentence += sentence[i]

    return proper_sentence

print(capitalize("what time do i have to be there? what’s the address?"))