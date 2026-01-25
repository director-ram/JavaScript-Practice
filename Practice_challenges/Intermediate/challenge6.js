const logs = [
    "Arjun",
    "Bunty",
    "Arjun",
    "Charan",
    "Arjun",
    "Bunty",
    "David",
    "Charan",
    "Charan",
    "Charan"
];

function mostActiveStudent(logs) {
    const counts = logs.reduce((acc, name) => {
        acc[name] = (acc[name] || 0) + 1;
        return acc;
    }, {});
    const maxCount = Object.entries(counts)
        .reduce((maxCount, currentCount) => {
            return currentCount[1] > maxCount[1] ?
                currentCount : maxCount;
        }, ["", 0]);
    return maxCount[0];
}
console.log(mostActiveStudent(logs));