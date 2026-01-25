const students = [
    { name: "Arjun", present: true },
    { name: "Bunty", present: false },
    { name: "Charan", present: true },
    { name: "David", present: false },
    { name: "Mad", present: true },
    { name: "Neeraj", present: true },
    { name: "Sameer", present: true },
    { name: "Narendra", present: true },
    { name: "Sai", present: false },
    { name: "Abhi", present: true }
];

function longestPresentStreak(students) {
    let maxStreak = 0;
    let currentStreak = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].present) {
            currentStreak++;
        }
        else {
            currentStreak = 0;
        }
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    }
    return maxStreak;
}
console.log(longestPresentStreak(students));