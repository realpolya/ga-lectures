import random

class BankAccount():

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.account = random.randint(11111, 99999)

    def display_balance(self):
        print(f"The account balance is now {self.balance}")

    def deposit(self, amount):
        self.balance += amount
        self.display_balance()
    
    def withdraw(self, amount):
        self.balance -= amount
        self.display_balance()
    
    def __str__(self):
        return f"Account {self.account} owned by {self.owner} has a balance of ${self.balance}"


account1 = BankAccount("Dasha", 300)
account2 = BankAccount("Vasya", 1000)
print(account1)
print(account2)

account1.deposit(1600)
account2.withdraw(500)

print(account1)
print(account2)

