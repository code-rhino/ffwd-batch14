# Topological Courses
[Video](https://vimeo.com/955937609/f33cb12a07?share=copy)

### Step-by-Step Guide for Implementing Topological Sort for Course Prerequisites

#### Objective:
To list courses in the order they should be taken, ensuring prerequisites are met.

#### Example Scenario:
You are working for a university, managing course prerequisites. Students must take certain courses before others. For instance:
- **Intro to Programming** is a prerequisite for **Data Structures**.
- **Data Structures** is a prerequisite for **Algorithms**.
- **Web Development** has no prerequisites.

#### Code Implementation:
The task involves implementing a topological sort to order courses correctly. Here's the step-by-step breakdown:

### 1. Define the Function

```javascript
function topologicalSort(numCourses, prerequisites) {
    // Initialize the graph as an array of empty arrays for each course
    let graph = Array.from({ length: numCourses }, () => []);
    // Initialize the in-degree array to count prerequisites for each course
    let inDegree = Array(numCourses).fill(0);
```

### 2. Build the Graph and In-Degree Array

```javascript
    // Iterate over the prerequisites to build the graph and in-degree array
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course); // Add course to the list of the prerequisite course
        inDegree[course]++; // Increment the in-degree for the course
    }
```

### 3. Initialize the Queue

```javascript
    let queue = [];
    // Add courses with no prerequisites (in-degree 0) to the queue
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
```

### 4. Process the Queue

```javascript
    let result = [];
    // While there are courses in the queue
    while (queue.length > 0) {
        let current = queue.shift(); // Remove the first course from the queue
        result.push(current); // Add the course to the result array
        // Iterate over the neighboring courses
        for (let neighbor of graph[current]) {
            inDegree[neighbor]--; // Decrease the in-degree of the neighboring course
            if (inDegree[neighbor] === 0) queue.push(neighbor); // Add to queue if no more prerequisites
        }
    }
```

### 5. Return the Result

```javascript
    // If the result contains all courses, return the result; otherwise, return an empty array
    return result.length === numCourses ? result : [];
}
```

### 6. Test the Function

```javascript
let numCourses = 4;
let courses = ["Intro to Programming", "Data Structures", "Algorithms", "Web Development"];
let prerequisites = [[1, 0], [2, 1]]; // "Data Structures" requires "Intro to Programming", "Algorithms" requires "Data Structures"

let sortedOrder = topologicalSort(numCourses, prerequisites);
console.log("Course Order:", sortedOrder.map(course => courses[course]));
```

### Explanation:
1. **Initialization**:
    - `graph` represents courses and their connections (prerequisites).
    - `inDegree` counts prerequisites for each course.

2. **Building the Graph**:
    - Iterate over `prerequisites`.
    - Update `graph` to show which courses depend on others.
    - Increment `inDegree` for dependent courses.

3. **Queue Initialization**:
    - Courses with no prerequisites (`inDegree` of 0) are added to `queue`.

4. **Processing Queue**:
    - Remove course from `queue`, add to `result`.
    - For each neighbor (dependent course), decrement `inDegree`.
    - If a course has no more prerequisites, add to `queue`.

5. **Result**:
    - Return the ordered list if all courses are processed.
    - Otherwise, return an empty array indicating a cycle (impossible to complete all courses).

By following these steps, you ensure students take courses in the correct order, respecting all prerequisites.