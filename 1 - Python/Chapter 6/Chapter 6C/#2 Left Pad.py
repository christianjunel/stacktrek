
def adjust(input, length, padding):
    if length - 1 == len(input):
        return padding + input
    elif length == 1:
        return input
    else:
        return adjust(input, length - 1, padding + padding[0])

print(adjust('19', 3, '-'))









 # if length > len(input):
    #     return adjust(input, length - 1, padding * ((length) - len(input)))
    # elif length == len(input):
    #     adjusted_text += input
    #     return padding + adjusted_text

# for i in range(1, length+1):
#         if i == (length + 1) - len(input):
#             adjusted_text += input
#             break
#         else:
#             adjusted_text += padding
# return adjusted_text