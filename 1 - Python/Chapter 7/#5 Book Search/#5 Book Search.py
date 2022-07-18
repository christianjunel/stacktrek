from fileinput import close
import imp
from os import path
from pickle import load, dump
from time import sleep

def add_record():
    print("\nPlease fill up all the fields.\n-------------------------------")
    book_id = input("Enter book ID: ")
    book_title = input("Enter book title: ")
    book_category = input("Enter category: ")
    book_author = input("Enter author: ")

    infile = open('Chapter 7/#5 Book Search/books.dat', 'ab')
    book_list = [book_id, book_title, book_category, book_author]
    
    dump(book_list,infile)
  
    infile.close()
    while True:
        goback = input("Would you like to go back to the main menu? Enter Choice(Y/N): ").lower().strip()
        if goback.isalpha() and goback == 'y':
            return book_menu()
        elif goback.isalpha() and goback == 'n':
            return quit()
        else:
            print("\nPlease enter 'Y' or 'N' only.\n")

def display_record():
    infile = open('Chapter 7/#5 Book Search/books.dat', 'rb')
    print("\n=====BOOKS AVAILABLE=====")
    while True:
        try:
            book = load(infile)
            print(f'''
    ID: {book[0]}
    Book Title: {book[1]}
    Category: {book[2]}
    Author: {book[3]}''')
        except EOFError:
            break
    infile.close()
   
    while True:
        goback = input("\nWould you like to go back to the main menu? Enter Choice(Y/N): ").lower().strip()
        if goback.isalpha() and goback == 'y':
            return book_menu()
        elif goback.isalpha() and goback == 'n':
            return quit()
        else:
            print("\nPlease enter 'Y' or 'N' only.\n")

def search_record():
    print(f"\n=====SEARCH A BOOK=====\n")
    print(f'''
    1. Search via ID 
    2. Search via Book Title 
    ''')    
    search = input("Enter Choice(1-2): ")
    if search.isdigit() and search == '1':
        infile = open('Chapter 7/#5 Book Search/books.dat', 'rb')
        book_id = input("\nEnter Book ID: ")
        while True:
            try:
                book = load(infile)
                if book_id in book[0]:
                    return f'''
    ID: {book[0]}
    Book Title: {book[1]}
    Category: {book[2]}
    Author: {book[3]}
                            ''' 
            except EOFError:
                break
        infile.close()
        print(f"Record not found!\nGoing back to the main menu in 3 seconds...")
        sleep(3)
        return book_menu()

    elif search.isdigit() and search == '2':
        infile = open('Chapter 7/#5 Book Search/books.dat', 'rb')
        book_title = input("\nEnter Book Title: ")
        while True:
            try:
                book = load(infile)
                if book_title == book[1]:
                    return f'''
    ID: {book[0]}
    Book Title: {book[1]}
    Category: {book[2]}
    Author: {book[3]}
                            '''                                  
            except EOFError:
                break
        infile.close()
        print(f"Record not found!\nGoing back to the main menu in 3 seconds...")
        sleep(3)
        return book_menu()

    else:
        print(f"\nPlease enter a valid input") 
        return search_record()
    
def book_menu():
    print(f'''
    Welcome To The Book Store!
    =====================
    1. Add Record 
    2. Display Record 
    3. Search a Record 
    4. Exit
    =====================
    ''')

    choice = input("Enter Choice(1-4): ")
    if choice.isdigit() and choice == '1':
        return add_record()
    elif choice.isdigit() and choice == '2':
        print(display_record())
    elif choice.isdigit() and choice == '3':
        return search_record()
    elif choice.isdigit() and choice == '4':
        return quit()
    else:
        print(f"\nPlease enter a valid input") 
        return book_menu()

if path.exists("Chapter 7/#5 Book Search/books.dat"):
    print(book_menu())
else:
    b_open = open("Chapter 7/#5 Book Search/books.dat", "x")
    b_open.close()
    quit()

