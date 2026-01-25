const students = [
    { name: "Arjun", present: true },
    { name: "Bunty", present: false },
    { name: "Charan", present: true },
    { name: "David", present: true }
];

function analyzeAttendance(students) {
    let presentCount = 0;
    let absentCount = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].present) {
            presentCount++;
        }
        else {
            absentCount++;
        }
    }
    return {
        totalStudents: students.length,
        presentCount: presentCount,
        absentCount: absentCount
    }
}
console.log(analyzeAttendance(students));