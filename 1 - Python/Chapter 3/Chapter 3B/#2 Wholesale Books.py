book_price = 24.95
book_discounted_price = book_price - (book_price * 0.40)
first_copy_price = 3.00
subsequent_copy_price = 0.75

number_of_books = float(input("How many books were purchased?: "))
books_total = number_of_books * book_discounted_price
shipping_total = (number_of_books - 1) * 0.75 + first_copy_price
print(books_total + shipping_total)