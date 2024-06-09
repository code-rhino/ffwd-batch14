### Live Demo: Course Scheduling Using Topological Sort

#### Demo Objective:
Show how topological sorting can be applied to solve a course scheduling problem, ensuring all prerequisites are respected.

#### Preparation:
1. **Materials Needed:**
   - Laptop with a coding environment (IDE like VSCode, online editors like Repl.it)
   - Projector or screen to display code
   - Prewritten code template to save time

#### Demo Steps:

**Step 1: Introduction (1 minute)**
- Briefly explain the course scheduling problem.
  - **Problem Statement:** Given a list of courses and their prerequisites, determine the order in which the courses should be taken.
  - **Use Case:** Ensuring all prerequisites are completed before taking the subsequent course.

**Step 2: Example Explanation (1 minute)**
- Show a visual representation of the course dependencies.
  ```plaintext
  Courses: ["Intro to Programming", "Data Structures", "Algorithms", "Web Development"]
  Prerequisites: [["Data Structures", "Intro to Programming"], ["Algorithms", "Data Structures"]]

  Visual Representation:
      Intro to Programming
               |
               v
      Data Structures
               |
               v
        Algorithms
      Web Development
  ```
- Explain that the goal is to find an order such that all prerequisites are satisfied.

**Step 3: Code Setup (1 minute)**
- Display the initial setup of the code.
  ```javascript
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
  ```

**Step 4: Live Coding (2 minutes)**
- Walk through the code, explaining each part:
  - **Graph Representation:** Using an adjacency list.
  - **In-Degree Array:** Tracks the number of prerequisites for each course.
  - **Queue:** Initializes with courses having zero prerequisites.
  - **Topological Sort:** Processes courses, updating the in-degree of neighbors, and adding courses to the queue as they become ready.
- Run the code to show the result.
  ```plaintext
  Course Order: ["Intro to Programming", "Data Structures", "Algorithms", "Web Development"]
  ```

**Step 5: Explanation of Results (1 minute)**
- Explain the output:
  - The order respects the prerequisites.
  - The result matches the visual representation of the dependencies.

**Step 6: Q&A and Wrap-Up**
- Allow a couple of minutes for questions and clarifications.
- Summarize the importance of topological sorting in course scheduling and similar real-world applications.

#### Demo Code:
```javascript
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
```

#### Visual Representation:
- Ensure the visual of the course dependencies is clearly displayed throughout the demo for easy reference.

By following these steps, you will provide a clear, concise, and interactive demonstration of how topological sorting can be applied to solve a course scheduling problem, reinforcing the lesson's concepts and engaging students effectively.