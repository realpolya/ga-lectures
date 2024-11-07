import random

class BankAccount():

    def __init__(self, owner, balance=0, overdraft=False):
        self.owner = owner
        self.balance = balance
        self.account = random.randint(11111, 99999)
        self.overdraft = overdraft

    def display_balance(self):
        print(f"The account balance is now {self.balance}")

    def deposit(self, amount):
        self.balance += amount
        self.display_balance()
    
    def withdraw(self, amount):
        if not self.overdraft and self.balance < amount:
            return print("Transaction denied")
        else:
            self.balance -= amount
            self.display_balance()
    
    def __str__(self):
        return f"Account {self.account} owned by {self.owner} has a balance of ${self.balance}"


account1 = BankAccount("Dasha", 300)
account2 = BankAccount("Vasya", 1000)
print(account1)
print(account2)

account1.deposit(1600)
account2.withdraw(1200)

print(account1)
print(account2)

class SavingsAccount(BankAccount):

    def __init__(self, owner, balance=0, overdraft=False):
        BankAccount.__init__(self, owner, balance, overdraft)
    
    def withdraw(self, amount):
        return print("No withdrawals permitted")

account3 = SavingsAccount("Krissya", 790)
print(account3)
account3.withdraw(700)
