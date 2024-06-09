### 5-Minute Live Demo: Topological Sort in a Directed Acyclic Graph

#### Preparation:
1. **Materials Needed:**
   - Laptop with a coding environment (IDE like VSCode, online editors like Repl.it)
   - Projector or screen to display code
   - Example graph (visual representation)
   - Prewritten code template to save time

#### Demo Steps:

**Step 1: Introduction (1 minute)**
- Briefly explain what a Directed Acyclic Graph (DAG) is and why topological sorting is important.
  - **DAG Definition:** A graph with directed edges and no cycles.
  - **Topological Sort:** Orders vertices such that for every directed edge `u -> v`, vertex `u` comes before `v`.
  - **Use Cases:** Task scheduling, build systems, course prerequisites.

**Step 2: Example Graph Explanation (1 minute)**
- Show a visual representation of a sample DAG on the screen.
  ```plaintext
      A
     / \
    B   C
   / \   \
  D   E   F
  ```
- Explain that nodes represent tasks and edges represent dependencies (e.g., task A must be done before tasks B and C).

**Step 3: Code Setup (1 minute)**
- Display the initial setup of the code.

```js
function topologicalSort(graph) {
    let visited = new Set();
    let stack = [];

    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (let neighbor of graph[node]) {
            dfs(neighbor);
        }
        stack.push(node);
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return stack.reverse();
}

// Example graph
let graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
};

let result = topologicalSort(graph);
console.log("Topological Sort:", result);
```

**Step 4: Live Coding (2 minutes)**
- Walk through the code, explaining each part:
  - **Graph Representation:** Dictionary with adjacency lists.
  - **DFS Function:** Recursive function to visit nodes.
  - **Visited Set:** Keeps track of visited nodes.
  - **Stack:** Stores nodes in topologically sorted order.
- Run the code to show the result.
  ```plaintext
  Topological Sort: ['A', 'C', 'F', 'B', 'E', 'D']
  ```

**Step 5: Explanation of Results (1 minute)**
- Explain the output:
  - The topological sort lists the nodes such that each node appears before all nodes it points to.
  - Verify the result against the visual representation of the graph.

**Step 6: Q&A and Wrap-Up**
- Allow a couple of minutes for questions and clarifications.
- Summarize the importance of topological sorting and its real-world applications.

#### Demo Code:
```python
def topological_sort(graph):
    visited = set()
    stack = []

    def dfs(node):
        if node in visited:
            return
        visited.add(node)
        for neighbor in graph[node]:
            dfs(neighbor)
        stack.append(node)

    for node in graph:
        if node not in visited:
            dfs(node)
    
    return stack[::-1]

graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

result = topological_sort(graph)
print("Topological Sort:", result)
```

#### Visual Representation:
- Ensure the visual of the graph is clearly displayed throughout the demo for easy reference.

By following these steps, you will provide a clear, concise, and interactive demonstration of topological sorting in a DAG, reinforcing the lesson's concepts and engaging students effectively.