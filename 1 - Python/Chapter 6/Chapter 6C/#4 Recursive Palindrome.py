def isPalindrome(s):
    if len(s) == 1 or len(s) == 0:
        return True
    else:
        if s[0] == s[len(s) - 1]:
            compare_strings = s[1:len(s)-1]
            return isPalindrome(compare_strings)
        else:
            return False

def display(s):
    if isPalindrome(s):
        return f"That was a palindrome"
    else:
        return f"That is not a palindrome"

print(display("racecar"))