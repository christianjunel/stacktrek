import heapq
from datetime import datetime

class Saseiko:
    def __init__(self):
        self.activities = []

    def add_activity(self, activity):
        heapq.heappush(self.activities,activity)
        

    def most_urgent_activity(self):
        return heapq.heappop(self.activities)


class Activity:
    def __init__(self, activity_title, deadline):
        self.activity_title = activity_title
        self.deadline = deadline

    def __repr__(self):
        return f"{self.activity_title}"

    def __lt__(self, other):
        return self.deadline < other.deadline

    

saseiko = Saseiko()
activity1 = Activity("Practice PE Performance", datetime(2020, 7, 8))
activity2 = Activity("Assignment in Filipino", datetime(2020, 7, 2))
activity3 = Activity("Assignment in Science", datetime(2020, 7, 3))
saseiko.add_activity(activity1)
saseiko.add_activity(activity2)
saseiko.add_activity(activity3)
# print(saseiko.activities)

# print(activity1.deadline.date())
print(saseiko.most_urgent_activity())
print(saseiko.most_urgent_activity())