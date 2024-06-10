# Topological Sort

[Video](https://vimeo.com/955925756/69b4f066d5?share=copy)

### Walkthrough of Topological Sort Implementation in JavaScript

In this walkthrough, we will explore how to implement a topological sort using Depth-First Search (DFS). This algorithm is particularly useful for ordering tasks in a sequence where certain tasks must precede others.

Here's the step-by-step guide to understanding the code provided and how it achieves a topological sort:

#### 1. Understanding the Problem
A topological sort of a directed acyclic graph (DAG) is a linear ordering of its vertices such that for every directed edge `uv` from vertex `u` to vertex `v`, `u` comes before `v` in the ordering. This is useful in scenarios such as task scheduling, course prerequisites, and more.

#### 2. Graph Representation
The graph is represented as an adjacency list. Each node points to an array of nodes it is connected to.
```javascript
let graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
};
```

#### 3. Depth-First Search (DFS) Function
The `dfs` function explores the graph deeply before backtracking. It uses a stack to keep track of the order of nodes.

```javascript
function dfs(graph, node, visited, stack) {
    if (visited.has(node)) {
        return;
    }
    visited.add(node);
    for (let neighbor of graph[node]) {
        dfs(graph, neighbor, visited, stack);
    }
    stack.push(node);
}
```
- **Visited Set:** Keeps track of visited nodes to avoid cycles and redundant processing.
- **Stack:** Used to store nodes in the order they finish processing. Nodes are added to the stack after all their neighbors are processed.

#### 4. Topological Sort Function
The `topologicalSort` function initializes the necessary data structures and iterates over all nodes, calling `dfs` for each unvisited node.

```javascript
function topologicalSort(graph) {
    let visited = new Set();
    let stack = [];

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(graph, node, visited, stack);
        }
    }

    return stack.reverse();
}
```
- **Visited Set:** Ensures each node is processed once.
- **Stack:** Captures the order of processing, which is reversed at the end to get the topological order.

#### 5. Executing the Topological Sort
Finally, we execute the topological sort on the given graph and print the result.

```javascript
let result = topologicalSort(graph);
console.log("Topological Sort:", result);
```
Output:
```
Topological Sort: [ 'A', 'C', 'F', 'B', 'E', 'D' ]
```
This output means that:
- `A` must come before `B` and `C`.
- `B` must come before `D` and `E`.
- `C` must come before `F`.

#### Detailed Explanation

1. **Initialize `visited` and `stack`:**
   - We create an empty set `visited` to track nodes that have been visited.
   - We create an empty array `stack` to store the nodes in the order they finish processing.

2. **Traverse Each Node:**
   - We iterate over each node in the graph.
   - If a node has not been visited, we call `dfs` on that node.

3. **Depth-First Search (DFS):**
   - The `dfs` function checks if the node is already visited. If so, it returns immediately.
   - If not, it marks the node as visited.
   - It then recursively visits all neighbors of the node.
   - After visiting all neighbors, it pushes the node onto the stack.

4. **Reverse the Stack:**
   - After all nodes have been processed, the stack contains nodes in the order they were finished. 
   - We reverse this stack to get the topological ordering.

This algorithm ensures that each node appears before its dependencies, fulfilling the requirement of a topological sort.
