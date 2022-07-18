class Student:
    def __init__(self, name, gender, course):
        self._name = name
        self._gender = gender
        self._course = course
        # pass

    @property
    def get_name(self):
        return self._name
        # pass

    @get_name.setter
    def name(self, value):
        self._name = value
        # pass

    @property
    def get_gender(self):
        return self._gender
        # pass

    @get_gender.setter
    def gender(self, value):
        self._gender = value
        # pass

    @property
    def get_course(self):
        return self._course
        # pass

    @get_course.setter
    def course(self, value):
        self._course = value
        # pass

std = Student('CJ', 'Male', 'IT')
std.name = 'John' #setter
print(std.get_name) #getter
