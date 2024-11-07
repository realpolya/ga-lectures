# object-oriented programming

class Dog():
    def __init__(self, name, age=0): # always pass self first, like 'this' in JS
        self.name = name
        self.age = age

    def bark(self): # instance method
        print(f'{self.name} says woof!')

    # print always calls __str__ method
    def __str__(self): # default string output from the class
        return f"The dog named {self.name} is {self.age} years old."

ruby = Dog('Ruby', 3)
print(ruby)
ruby.bark()

print(ruby.name, ruby.age)

# directory method
print('                      ')
print('---------------dir---------------')
print(dir(ruby)) # shows attributes and methods
print('                      ')



class Vehicle():

    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.running = False

    def start(self):
        self.running = True
        print("Starting up")

    def stop(self):
        self.running = False
        print("Turning off")

    def __str__(self):
        return f'The vehicle is {self.make} {self.model}.'

print('---------------test---------------')
car = Vehicle("Toyota", "RAV4")

print(car)
# prints: The vehicle is a Toyota RAV4.

print(car.running) 
# prints: False

car.start()
# prints: Starting up!

print(car.running) 
# prints: True
