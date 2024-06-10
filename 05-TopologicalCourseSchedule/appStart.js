function topologicalSort(numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let inDegree = Array(numCourses).fill(0);

    // Build the graph and in-degree array
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let result = [];
    while (queue.length > 0) {
        let current = queue.shift();
        result.push(current);
        for (let neighbor of graph[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return result.length === numCourses ? result : [];
}

let numCourses = 4;
let courses = ["Intro to Programming", "Data Structures", "Algorithms", "Web Development"];
let prerequisites = [[1, 0], [2, 1]]; // "Data Structures" requires "Intro to Programming", "Algorithms" requires "Data Structures"

let sortedOrder = topologicalSort(numCourses, prerequisites);
console.log("Course Order:", sortedOrder.map(course => courses[course]));