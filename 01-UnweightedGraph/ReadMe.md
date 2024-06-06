## Step-by-Step Guide to Finding the Shortest Path in a Graph

[Video](https://vimeo.com/954396251/d276a3198c?share=copy)

This guide will explain how to find the shortest path between two nodes in a graph using breadth-first search (BFS). The graph is represented as an adjacency list, and we will implement the algorithm in JavaScript.

### Problem Explanation
We need to find the shortest path between two nodes in a graph. The graph is represented with nodes and edges, and we want to determine the shortest path from a starting node to a target node.

### Graph Representation
Our graph is represented as an adjacency list, where each node points to an array of its neighbors.

```javascript
const graph = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1, 5, 6],
  4: [2],
  5: [2, 3, 7],
  6: [3],
  7: [5]
};
```

### Algorithm: Breadth-First Search (BFS)

1. **Initialize the Queue and Visited Set**:
   - Create a queue to keep track of paths.
   - Use a set to keep track of visited nodes to avoid cycles.

2. **Enqueue the Start Node**:
   - Start with an array containing the start node.
   - Add the start node to the visited set.

3. **Process the Queue**:
   - While the queue is not empty, remove the first path from the queue.
   - Get the last node in the current path.
   - If this node is the target, return the path.

4. **Explore Neighbors**:
   - For each neighbor of the current node, if it hasn't been visited, mark it as visited and enqueue a new path that includes this neighbor.

5. **Return Null if No Path Found**:
   - If the queue is exhausted and no path to the target is found, return `null`.

### Implementation in JavaScript

```javascript
function findShortestPath(graph, start, target) {
  let queue = [[start]];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let path = queue.shift();
    let node = path[path.length - 1];

    if (node === target) {
      return path;
    }

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
}

const graph = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1, 5, 6],
  4: [2],
  5: [2, 3, 7],
  6: [3],
  7: [5]
};

const start = 1;
const target = 7;
const path = findShortestPath(graph, start, target);
console.log(`Shortest path from ${start} to ${target}:`, path);
```

### Step-by-Step Code Execution

1. **Initialization**:
   ```javascript
   let queue = [[start]]; // Queue initialized with the start node.
   let visited = new Set([start]); // Visited set initialized with the start node.
   ```

2. **Processing the Queue**:
   - While the queue is not empty:
     ```javascript
     while (queue.length > 0) {
       let path = queue.shift(); // Dequeue the first path.
       let node = path[path.length - 1]; // Get the last node in the current path.
     ```

3. **Check if the Node is the Target**:
   - If the current node is the target, return the path:
     ```javascript
     if (node === target) {
       return path;
     }
     ```

4. **Explore Neighbors**:
   - For each neighbor of the current node:
     ```javascript
     for (let neighbor of graph[node]) {
       if (!visited.has(neighbor)) {
         visited.add(neighbor); // Mark neighbor as visited.
         queue.push([...path, neighbor]); // Enqueue new path including the neighbor.
       }
     }
     ```

5. **Return Null if No Path is Found**:
   - If the queue is empty and no path is found:
     ```javascript
     return null;
     ```

### Example Output
```javascript
console.log(`Shortest path from ${start} to ${target}:`, path);
// Output: Shortest path from 1 to 7: [1, 2, 5, 7]
```

This guide provides a step-by-step approach to implement BFS for finding the shortest path in a graph, complete with an explanation of each part of the algorithm and the code implementation.