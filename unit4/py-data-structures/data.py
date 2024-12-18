# using variables as keys in dictionaries
favorite_animal = 'dog' # only immutable data types

student = {
    'name': 'Maria',
    'favorite_integer': 5,
    favorite_animal: 'llama' # notice the lack of quotes around favorite_animal
}

print(student['name'])
# prints: {'name': 'Maria', 'favorite_integer': 5, 'dog': 'llama'}

# get method
print(student.get('love'))

# if a key exists in the dictionary
if 'course' in student:
    print(f"{student['name']} is enrolled in {student['course']}")
else: # if not in dictionary
    print(f"{student['name']} is not enrolled in a course")
    # prints: Maria is not enrolled in a course

# reassign
student['name'] = 'Polina'
print(student['name'])

# new key
student['color'] = 'indigo'
print(student)

# delete
del student['favorite_integer']
print(student)

# length / number of items in dictionary
print(len(student)) # dictionary
print(len('student')) # number of characters in string 'student'

# looping
for key, val in student.items():
    print(f"{key} is {val}")

favorite_item = 'the row bag'

things_location = {
    'phone': 'on a table',
    'running shoes': 'at home',
    favorite_item: 'in a dustbag'
}

for key, value in things_location.items():
    print(f"My {key} - {value}")

# lists – sequence type in python
colors = ['red', 'indigo', 'thistle', 'pink']
colors[-3] = 'yellow'
print(colors[-3]) # negative indexing is allowed

# list methods
colors.extend(['black', 'white'])
colors.insert(3, 'purple')
colors.pop(6)
colors.remove('black')
print(colors)

for color in colors:
    print(color)

for index, color in enumerate(colors):
    print(index, color)

colors.clear()
print(colors)

# tuple
hello_tuple = ('Hello', ) # comma creates a tuple
print(type(hello_tuple))

colors_tuple = ("red", "yellow", "green")
r, y, g = colors_tuple #unpacking
print(r)
print(colors_tuple[1])
red_index = colors_tuple.index('red')
print(red_index)

for index, color in enumerate(colors_tuple):
    print(index, color)

