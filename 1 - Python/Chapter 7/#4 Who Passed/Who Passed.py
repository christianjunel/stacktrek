
def count_rec():
    from pickle import load
    count = 0
    passed_students = []
    disp_passed_students = ""
    infile = open('Chapter 7/#4 Who Passed/student.dat', 'rb')

    #read to the end of file.
    while True:
        try:
            #reading the oject from file
            student = load(infile)
            #display the object
            if student[2] > 75:
                count += 1
                passed_students.append(f"Student #: {student[0]} Student Name: {student[1]} Grade: {student[2]}")
        except EOFError:
            break
    
    #close the file
    infile.close()
    for line in passed_students:
                disp_passed_students += line +"\n"
    return f"\nRECORDS OF PASSED STUDENTS:\n\n{disp_passed_students}\n# of students who passed:{count}"

print(count_rec())