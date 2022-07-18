

class Queue:
    def __init__(self, size):
        self.size = size
        self.list = list()

    def is_empty(self):
        return self.list == []

    def add(self, element):
        self.element = element
        if len(self.list) < self.size:
            self.list.append(self.element)

    def remove(self):
        self.list.remove(self.list[0])
        # self.list.append(self.element)

    def peek(self):
        if not self.list:
            return
        else:
            return self.list[0]

    def display(self):
        if not self.list:
            return
        else:
            return self.list

queue = Queue(5)
queue.add(99)
queue.add(6)
queue.add(56)
queue.add(38)
queue.remove()
queue.remove()

print(queue.display())
print(queue.peek())