const students = [
    { name: "Arjun", marks: 85 },
    { name: "Bunty", marks: 46 },
    { name: "Charan", marks: 78 },
    { name: "David", marks: 98 },
    { name: "Ema", marks: 67 },
    { name: "Farhan", marks: 90 },
    { name: "Hemasai", marks: 99 }
];

function getTopStudents(students) {
    return [...students].filter(student =>
        student.marks >= 50).sort((a, b) =>
            b.marks - a.marks).slice(0, 3);
}
console.log(getTopStudents(students));
