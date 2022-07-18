def JTOI():
    display_correct_sentence = [] #Solution 1
    correct_sentence = "" #Solution 1
    f_read = open("Chapter 7/#1 J to I/WORDS.TXT", "rt")
    # f_write = open("Chapter 7/#1 J to I/WORDS_CORRECT.txt", "w") #Solution 2

    for line in f_read:
        display_correct_sentence.append(line) #Solution 1
        for char in display_correct_sentence[0]: 
            if char == 'j': #Solution 1
                correct_sentence += 'i' #Solution 1
            elif char == 'J': #Solution 1
                correct_sentence += 'I' #Solution 1
            else: #Solution 1
                correct_sentence += char #Solution 1
        # f_write.write(line.replace("J", "I")) #Solution 2
    f_read.close()
    return correct_sentence #Solution 1
    # f_write.close() #Solution 2

    # f_open = open("Chapter 7/#1 J to I/WORDS_CORRECT.txt", "rt") #Solution 2
    # f_read_correct = f_open.read() #Solution 2
    # f_open.close() #Solution 2
    # return f_read_correct #Solution 2

print(JTOI())
