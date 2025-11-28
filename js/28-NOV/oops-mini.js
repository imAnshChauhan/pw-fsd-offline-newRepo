class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

class Student extends Person {
    constructor(name, marks, course) {

        // call the parent class constructor
        super(name);

        // set your properties
        this.marks = marks;
        this.course = course;
    }

    getStatus() {
        return this.marks >= 40 ? "Pass" : "Fail";
    }

    getDetails() {
        return {
            name: this.getName(),
            course: this.course,
            marks: this.marks,
            status: this.getStatus()
        }
    }
}

class StudentManager {
    constructor() {
        this.students = [];
    }

    add(student) {
        this.students.push(student);
    }

    remove(index) {
        this.students.splice(index, 1);
    }

    getAll() {
        return this.students;
    }
}

const manager = new StudentManager();

// UI Functions

function addStudent() {
    const name = document.getElementById('name').value;
    const marks = document.getElementById('marks').value;
    const course = document.getElementById('course').value;

    if(!name || !marks) {
        alert('Plese fill all fields!');
        return;
    }

    const newStudent = new Student(name, marks, course);

    manager.add(newStudent);

    // re render the students
    renderTable();

    // clear the form
    clearForm();
}

function deleteStudent(index) {
    manager.remove(index);

    renderTable();
}

function renderTable() {
    const table = document.getElementById('studentTable');
    table.innerHTML = '';

    let allStudent = manager.getAll();

    allStudent.forEach((student, index) => {
        let details = student.getDetails();

        let eRow = `
            <tr>
                <td>${details.name}</td>
                <td>${details.course}</td>
                <td>${details.marks}</td>
                <td><span class= "badge ${details.status === 'Pass' ? 'pass' : 'fail'}">${details.status}</span></td>
                <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;

        table.innerHTML += eRow;
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('marks').value = '';
}