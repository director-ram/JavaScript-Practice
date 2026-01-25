const students = [
    { name: "Arjun", present: true },
    { name: "Bunty", present: false },
    { name: "Charan", present: true },
    { name: "David", present: false }
];

function firstAbsentStudent(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].present === false) {
            return students[i].name;
        }
    }
    return "All students are present";
}
console.log(firstAbsentStudent(students));