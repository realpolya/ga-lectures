''' falsy values in Python:
False
None
Zero in any numeric type: 0 0.0
Empty sequences or collections:
'' (empty string)
[] (empty list)
() (empty tuple)
{} (empty dictionary)
range(0) (empty range)
'''

print(7 == 7)
# prints: True
# 7 is equal to 7

print(7 == "7")
# prints: False 
# 7 is an integer, and "7" is a string

print(7 != 7)
# prints: False
# 7 is equal to 7

print(7 != "7")
# prints: True 
# 7 is an integer, and "7" is a string; therefore, they cannot be equal

# or, and, not

# or
# or - Returns the first truthy operand, or the last operand.
# and - Returns the first falsy operand, or the last operand.

# INPUT
color = input('Enter "green", "yellow", "red": ').lower()
print(f'The user entered {color}')


# looping
names = ["Emily", "Jack", "Sophia", "Ethan"]

for name in names:
    print(name)

num = 1

while num <= 10:
    print(num)
    # prints the numbers 1 through 10
    num += 1

# break and continue

things = ["computer", "g-g-ghost", "chair", "spider", "desk"]

for thing in things:
    if thing == "g-g-ghost":
        print("Oh, that's just my ghost friend, carry on.")
        continue
    elif thing == "spider":
        print("Nope. Burn it down, no more.")
        break
    print(f"There is a {thing} in the room.")
