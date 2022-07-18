def calculate(numbers, digits):
    possible_combinations = factorial(numbers) / (factorial(digits) * factorial((numbers-digits)))
    return f"1 in {round(possible_combinations)}"
    # return round(possible_combinations)
    


def factorial(number):
    if number < 1:
        return 1
    else:
        return number * factorial(number - 1)

print(calculate(49, 6))
