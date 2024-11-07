# object-oriented programming

class Dog():
    next_id = 1

    def __init__(self, name, age=0): # always pass self first, like 'this' in JS
        self.name = name
        self.age = age
        self.id = self.__class__.get_next_id()
    
    @classmethod
    def get_next_id(cls):
        current_id = cls.next_id
        cls.next_id += 1
        return current_id

    def bark(self): # instance method
        print(f'{self.name} says woof!')

    # print always calls __str__ method
    def __str__(self): # default string output from the class
        return f"The dog named {self.name} (index {self.id}) is {self.age} years old. This dog belongs to {self.__class__}"

    @classmethod
    def get_total(cls):
        return f"Total dog count: {cls.next_id - 1}"

ruby = Dog('Ruby', 3)
waffle = Dog('Waffle', 15)

print(ruby)
print(waffle)
ruby.bark()

print(ruby.name, ruby.age)
print(Dog.get_total())

# directory method
print('                      ')
print('---------------dir---------------')
print(dir(ruby)) # shows attributes and methods
print('                      ')



# Inheritance
class ShowDog(Dog):

    def __init__(self, name, age=0, earnings=0):
        Dog.__init__(self, name, age)
        self.earnings = earnings
    
    def earn(self, amount):
        self.earnings += amount
        print(f"{self.name}'s new total earnings are ${self.earnings}")

diamond = ShowDog("Diamond", 34)
print(diamond)
diamond.earn(340)

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
