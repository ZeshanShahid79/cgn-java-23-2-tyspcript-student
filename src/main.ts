type Student = {
    firstname: string
    surname: string
    age: number
    grades: (number | string | undefined)[]
}


const studentA: Student = {
    firstname: "Zeshan",
    surname: "Shahid",
    age: 19,
    grades: [1, 4, 2, 1, 4, 5, 2]
}

const studentB: Student = {
    firstname: "Florian",
    surname: "Weber",
    age: 12,
    grades: [1, "A", undefined, 1, "C", 5, undefined]
}

const studentC: Student = {
    firstname: "Daniel",
    surname: "Schwarz",
    age: 12,
    grades: [1, 4, "E", 1, 4, undefined, 2]
}

const students: Student[] = [studentA, studentB, studentC]

function printStudent(student: Student): void {
    let text: string = ""
    text += student.firstname + " " + student.surname + " (" + student.age + ")"
    text += "\n===================="
    text += "\n"
    text += "\nNoten:"
    text += "\n"

    for (let i = 0; i < student.grades.length; i++) {
        text += student.grades[i] + ","
    }

    console.log(text)
}

function printStudentWithStars(student: Student): void {
    let text: string = ""
    text += student.firstname + " " + student.surname + " (" + student.age + ")"
    text += "\n===================="
    text += "\n"
    text += "\nNoten:"
    text += "\n"

    for (let i = 0; i < student.grades.length; i++) {
        if (student.grades[i] === undefined) {
            text += "*,"
        } else {
            text += student.grades[i] + ","
        }
    }

    console.log(text)
}


function printAllStudents(students: Student[]) {
    for (let i = 0; i < students.length; i++) {
        printStudentWithStars(students[i]);
    }
}


printStudent(studentA)
printStudentWithStars(studentB)
printAllStudents(students)