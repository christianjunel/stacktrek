
def count_words():
    f_open = open("Chapter 7/#2 Count The/notes.txt")
    f_the_count = f_open.read().lower().count("the")
    f_open.close()
    return f_the_count

print(count_words())
