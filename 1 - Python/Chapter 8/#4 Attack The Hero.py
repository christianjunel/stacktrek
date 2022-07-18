class Hero:
    def __init__(self):
        self._name = "Duelle"
        self._max_health = 1000
        self._current_health = self._max_health
        self._attack_power = 50

    @property
    def name(self):
        return self._name

    @property
    def max_health(self):
        return self._max_health

    @property
    def current_health(self):
        return self._current_health

    @property
    def attack_power(self):
        return self._attack_power


class Monster:

    def __init__(self, name, max_health, attack_power, hero = Hero()):
        self.name = name
        self.max_health = max_health
        self.attack_power = attack_power
        hero = Hero()
        self.hero = hero
        

    def attack(self):
        if self.hero._current_health > 0:
            self.hero._current_health = self.hero._current_health - self.attack_power
            if self.hero._current_health < 0:
                return self.hero._current_health == 0
        return self.hero._current_health
           
     
    def defend(self):
        if self.max_health > 0:
            self.max_health = self.max_health - (self.hero.attack_power*0.1)
            if self.max_health < 0:
                return self.max_health == 0
        return self.max_health
    

m = Monster('CJ', 200, 400)
print(m.attack())
print(m.attack())
print(m.attack())