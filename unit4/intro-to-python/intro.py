# Introduction to Python

'''
Multiline
'''

"""
Multiline
"""

num = 15
my_number = 10

print('Hi')
print(my_number)

my_number = 20
print(my_number)

# capital letters communicate that it should not be reassigned
MY_FAVORITE = 5

# Data types:
print(type('hello'))
# int, float (int with a decimal), bool, str, None
print(type(25.))
print(type(True))
print(type(None))

# Conversion between data types: no type coercion
# str(item)        # Converts `item` to a string
# int(item, base)  # Converts `item` to an integer with the provided `base`
# float(item)      # Converts `item` to a floating-point number
# hex(int)         # Converts `int` to a hexadecimal string
# oct(int)         # Converts `int` to an octal string
# tuple(item)      # Converts `item` to a tuple
# list(item)       # Converts `item` to a list
# dict(item)       # Converts `item` to a dictionary

# Math operations:
result = 4 / 2 # produces a float no matter what
result = 4 // 2 # produces an integer (always rounds down)
# exponentiation:
result **= 2

# shortcut
result += 1
result /= 1
result *= 1
result -= 1
print(result)

my_string = ''' lovely
string'''

print (my_string)

str1 = 'cool '
str2 = 'lovely'
str3 = str1 + str2
print(str3)

# string interpolation
state = "New York"
person = "Polina"
year = 2021
message = f"{person} moved to {state} in {year}"
print(message)

# string methods:
print(message.split(" "))
print(list("abcd"))
print(message.index('moved'))
print(message.find('moved'))
print(message.upper())
print(message.lower())
print(message.replace("Polina", "King"))

print(person in message) # see if person is inside the message

print(len(message)) # length