### Live Demo: Check if a Graph is Bipartite

#### Demo Objective:
Show how to check if a given graph is bipartite using BFS.

#### Preparation:
1. **Materials Needed:**
   - Laptop with a coding environment (IDE like VSCode, online editors like Repl.it)
   - Projector or screen to display code
   - Prewritten code template to save time

#### Demo Steps:

**Step 1: Introduction (1 minute)**
- Briefly explain what a bipartite graph is.
  - **Definition:** A graph whose vertices can be divided into two sets such that no edges connect vertices within the same set.
  - **Use Case:** Ensuring that nodes in two distinct sets have no internal connections, useful in problems like job assignments, course scheduling, etc.

**Step 2: Example Graph Explanation (1 minute)**
- Show a visual representation of a sample graph.
  ```plaintext
  Example Graph:
      1 -- 2
      |    |
      4 -- 3
  ```
- Explain that the goal is to check if the graph can be divided into two sets where no edges exist within the same set.

**Step 3: Code Setup (1 minute)**
- Display the initial setup of the code.
  ```javascript
  function isBipartite(graph) {
      let color = Array(graph.length).fill(-1);

      function bfs(start) {
          let queue = [start];
          color[start] = 0;

          while (queue.length > 0) {
              let node = queue.shift();
              for (let neighbor of graph[node]) {
                  if (color[neighbor] === -1) {
                      color[neighbor] = 1 - color[node];
                      queue.push(neighbor);
                  } else if (color[neighbor] === color[node]) {
                      return false;
                  }
              }
          }
          return true;
      }

      for (let i = 0; i < graph.length; i++) {
          if (color[i] === -1 && !bfs(i)) {
              return false;
          }
      }
      return true;
  }

  // Example graph represented as adjacency list
  let graph = [
      [],         // No node 0 for simplicity (1-based indexing)
      [2, 4],     // Node 1 is connected to Node 2 and Node 4
      [1, 3],     // Node 2 is connected to Node 1 and Node 3
      [2, 4],     // Node 3 is connected to Node 2 and Node 4
      [1, 3]      // Node 4 is connected to Node 1 and Node 3
  ];

  let result = isBipartite(graph);
  console.log("Is the graph bipartite?", result);
  ```

**Step 4: Live Coding (2 minutes)**
- Walk through the code, explaining each part:
  - **Graph Representation:** Adjacency list.
  - **Color Array:** Used to track the color of each node (initialized to -1).
  - **BFS Function:** Colors nodes alternately and checks for conflicts.
  - **Main Function:** Iterates through each node, ensuring disconnected components are checked.
- Run the code to show the result.
  ```plaintext
  Is the graph bipartite? true
  ```

**Step 5: Explanation of Results (1 minute)**
- Explain the output:
  - The graph is bipartite if no two adjacent nodes have the same color.
  - The BFS function ensures each node is colored alternately, checking for conflicts.

**Step 6: Q&A and Wrap-Up**
- Allow a couple of minutes for questions and clarifications.
- Summarize the importance of checking for bipartiteness in graphs and its real-world applications.

#### Demo Code:
```javascript
function isBipartite(graph) {
    let color = Array(graph.length).fill(-1);

    function bfs(start) {
        let queue = [start];
        color[start] = 0;

        while (queue.length > 0) {
            let node = queue.shift();
            for (let neighbor of graph[node]) {
                if (color[neighbor] === -1) {
                    color[neighbor] = 1 - color[node];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    return false;
                }
            }
        }
        return true;
    }

    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1 && !bfs(i)) {
            return false;
        }
    }
    return true;
}

// Example graph represented as adjacency list
let graph = [
    [],         // No node 0 for simplicity (1-based indexing)
    [2, 4],     // Node 1 is connected to Node 2 and Node 4
    [1, 3],     // Node 2 is connected to Node 1 and Node 3
    [2, 4],     // Node 3 is connected to Node 2 and Node 4
    [1, 3]      // Node 4 is connected to Node 1 and Node 3
];

let result = isBipartite(graph);
console.log("Is the graph bipartite?", result);
```

#### Visual Representation:
- Ensure the visual of the graph is clearly displayed throughout the demo for easy reference.

By following these steps, you will provide a clear, concise, and interactive demonstration of how to check if a graph is bipartite using BFS, reinforcing the lesson's concepts and engaging students effectively.