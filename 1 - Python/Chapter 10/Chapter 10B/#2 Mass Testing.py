import heapq

class MassTesting:
    def __init__(self):
        self.people = []
        

    def addPerson(self, person):
        heapq.heappush(self.people, person)
        # return self.people

    def dequeue(self):
        return heapq.heappop(self.people)


class Person:
    def __init__(self, name, age, is_hospitalized, is_healthcare_worker, with_symptoms):
        self.name = name
        self.age = age
        self.is_hospitalized = is_hospitalized
        self.is_healthcare_worker = is_healthcare_worker
        self.with_symptoms = with_symptoms

    def priority_sub_group(self):
        if self.is_hospitalized == True or (self.is_healthcare_worker == True and self.with_symptoms == True):
            priority_val = 100
        elif self.age >= 60:
            priority_val = 75
        elif self.is_healthcare_worker == True or self.is_healthcare_worker == True or self.with_symptoms == True:
            priority_val = 50
        else:
            priority_val = 25
        return priority_val

    def __lt__(self, other):
        return self.priority_sub_group() > other.priority_sub_group()

    def __repr__(self):
        return f"{self.name}, {self.age}, {self.is_hospitalized}, {self.is_healthcare_worker}, {self.with_symptoms}"

mass_testing = MassTesting()
person1 = Person("Maria", 24, False, False, False)
person2 = Person("June", 61, False, False, True)
person3 = Person("Mark", 34, True, False, True)

mass_testing.addPerson(person1)
mass_testing.addPerson(person2)
mass_testing.addPerson(person3)
print(mass_testing.dequeue()) #Mark