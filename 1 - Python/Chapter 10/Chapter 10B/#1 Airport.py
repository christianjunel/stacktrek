import heapq


class Airport:
    def __init__(self):
        self.passengers = []
        # heapq.heapify(self.passengers)

    def add_passenger(self, passenger):
        heapq.heappush(self.passengers, passenger)
        return self.passengers #For testing

    def dequeue(self):
        return heapq.heappop(self.passengers)


class Passenger:
    def __init__(self, name, age, is_pregnant, with_children):
        self.name = name
        self.age = age
        self.is_pregnant = is_pregnant
        self.with_children = with_children

    def sub_group(self): #Computing the total priority value of a passenger
        if self.age >= 60:
            priority_val = 100
        elif self.is_pregnant == True or self.with_children == True:
            priority_val = 50
        else:
            priority_val = 1
        return priority_val

    def __repr__(self): #Representation magic method, returns class objects as strings.
        return f"{self.name, self.age, self.is_pregnant, self.with_children}"

    def __lt__(self, other): #Also called the less than magic method. In this case, it sorts from max priority to min priority
        return self.sub_group() > other.sub_group()

airport = Airport()

passenger1 = Passenger("Henry", 27, False, False)
passenger2 = Passenger("Jen", 25, True, False)
passenger3 = Passenger("Nica", 67, False, False)

print(passenger1)

print(airport.add_passenger(passenger1))
print(airport.add_passenger(passenger2))
print(airport.add_passenger(passenger3))
print(airport.dequeue())
print(airport.dequeue())
# passenger4 = Passenger("Mark", 45, False, True)
# print(airport.add_passenger(passenger4))

