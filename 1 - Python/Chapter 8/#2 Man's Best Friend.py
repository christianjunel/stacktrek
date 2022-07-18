class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        # pass

    def bark(self):
        return f"{self.name} is barking"
        # pass

    def run(self):
        return f"{self.name} is running"
        # pass

    def eat(self, food):
        self.food = food
        return f"{self.name} is eating {self.food}"
        # pass

    def play(self, object):
        self.object = object
        if object[0] in 'aeiou':
            return f"{self.name} is playing with an {self.object}"
        else:
            return f"{self.name} is playing with a {self.object}"
        # pass

d = Dog('Bantay', 'Askal')
print(d.bark())
print(d.run())
print(d.eat('chocolate'))
print(d.play('ball'))