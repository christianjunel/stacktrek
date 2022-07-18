class Child:
    def __init__(self, name, small_stickers:int, big_stickers:int):
        self.name = name
        self.small_stickers = small_stickers *  5
        self.big_stickers = big_stickers * 10
    def get_total_points(self):
        return self.small_stickers + self.big_stickers

    # def __repr__(self): #Its default value would return the memory address of the Child object, you can customize the string via this:
    #     return f"{self.name} {self.get_total_points()}"
        
class ChildrenQueue:
    def __init__(self, children):
        self.children = children
        self.children_queue = []

    def get_points_list(self):
        return [child.get_total_points() for child in self.children]
       

    def get_children_queue(self):
        sorted_children = sorted(self.children, key=lambda x: x.get_total_points(), reverse=True)
        self.children_queue = [child.name for child in sorted_children]
        return self.children_queue

    def get_first_child_to_go(self):
        return self.children_queue[0] if len(self.children_queue) else None


child1 = Child("Terry", 2, 5)
child2 = Child("Alex", 3, 2)
child3 = Child("Lizzie", 6, 3)
child4 = Child("Donald", 2, 3)
child5 = Child("Roy", 1, 3)

children = []
children.append(child1)
children.append(child2)
children.append(child3)
children.append(child4)
children.append(child5)

childrenQueue = ChildrenQueue(children)
print(childrenQueue.get_children_queue())
print(childrenQueue.get_first_child_to_go())