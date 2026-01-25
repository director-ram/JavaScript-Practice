const students = [
    { name: "Arjun", marks: 85 },
    { name: "Bunty", marks: 46 },
    { name: "Charan", marks: 78 },
    { name: "David", marks: 98 },
    { name: "Ema", marks: 67 },
    { name: "Farhan", marks: 90 },
    { name: "Hemasai", marks: 99 }
];
function groupByGrade(students) {
    return [...students].reduce((acc, student) => {
        const grade = student.marks >= 85 ? "A" :
            student.marks >= 70 && student.marks < 85 ? "B" :
                student.marks >= 50 && student.marks < 70 ? "C" : "Fail";
        acc[grade].push(student.name);
        return acc;
    }, {
        A: [],
        B: [],
        C: [],
        Fail: []
    });
}
console.log(groupByGrade(students));