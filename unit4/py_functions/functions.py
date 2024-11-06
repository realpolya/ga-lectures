def function_name():
    statements
    return statement #optional

# no empty functions in python (use pass instead)
def do_nothing():
    pass

# no invoking function before the definition

# can't assign a function to a variable

# Lambda functions (single line functions)

nums = [1, 3, 2, 6, 5]
odds = list(filter(lambda num: num % 2, nums))

# passing any number of arguments (*)
def sum(*args):
    print(type(args))
    # prints: <class 'tuple'>
    total = 0
    
    for arg in args:
        total += arg

    return total

print(sum(1, 5, 10))

# args after other required parameters
def sum(greeting, *args):
    print(greeting)
    # prints: Hello, friend
    total = 0
    
    for arg in args:
        total += arg

    return total

print(sum("Hello, friend", 1, 5, 10))

# kwargs = keyword arguments (kwargs is a dictionary)
def make_employee(role):
    print(role)
    # prints: CEO

    employee = {"role": role}
    return employee

print(make_employee(role="CEO")) # example of kwargs
# prints: { 'role': 'CEO' }

# **kwargs example
def make_employee(role, **kwargs):
    print(kwargs)
    # prints: {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
    print(type(kwargs))
    # prints: <class 'dict'>
    # kwargs is a dictionary - you can use it anywhere you'd use one:
    employee = {"role": role, "name": kwargs}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }

# you can access kwargs by kwargs.values() method

# various argument types together:
def arg_demo(pos1, pos2, *args, **kwargs):
    print(f'Positional params: {pos1}, {pos2}')
    print('*args:')
    for arg in args:
        print(' ', arg)
    print('**kwargs:')
    for keyword, value in kwargs.items():
        print(f'  {keyword}: {value}')

arg_demo('A', 'B', 1, 2, 3, color='purple', shape='circle')