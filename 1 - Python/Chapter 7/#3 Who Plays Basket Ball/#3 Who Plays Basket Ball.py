from pickle import load, dump

def create_basket():
    bball_list = []
    infile = open('Chapter 7/#3 Who Plays Basket Ball/game.dat', 'rb')
    #Create basket.dat binary file

    while True:
        try:
            #reading the oject from file
            participant = load(infile)
            #display the object
            if participant[0] == "Basket Ball":
                bball_list = [participant[0], participant[1]]
                infile_a = open('Chapter 7/#3 Who Plays Basket Ball/basket.dat', 'ab')
                dump(bball_list, infile_a)
                infile_a.close()
        except EOFError:
            break

    #close the file
    infile.close()

def read_records():
    #open file in binary mode for reading
    #just change the path and file depending on your choice
    infile = open('Chapter 7/#3 Who Plays Basket Ball/basket.dat', 'rb')

    #read to the end of file.
    while True:
        try:
            #reading the oject from file
            participant = load(infile)
            #display the object
            print(participant[0], participant[1])
        except EOFError:
            break

    #close the file
    infile.close()

create_basket()
read_records()