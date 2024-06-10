// Function to check if the graph is bipartite
function isBipartite(graph) {
    // Initialize a color array to keep track of the colors assigned to each node
    let color = Array(graph.length).fill(-1);  // -1 means the node is uncolored

    // Iterate over each node in the graph
    for(let i = 0; i < graph.length; i++) {
        // If the node is uncolored and the BFS function returns false
        if(color[i] === -1 && !bfs(graph, color, i)) {
            // The graph is not bipartite
            return false;
        }
    }
    // If all nodes are processed without conflict, the graph is bipartite
    return true;
}

// Breadth-First Search (BFS) function to color the graph
function bfs(graph, color, start) {
    // Initialize a queue for BFS and start with the initial node
    let queue = [start];
    // Color the starting node with the first color (0)
    color[start] = 0;

    // While there are nodes to process in the queue
    while(queue.length > 0) {
        // Dequeue the first node
        let node = queue.shift();

        // Iterate over each neighbor of the current node
        for(let neighbor of graph[node]) {
            // If the neighbor is uncolored
            if(color[neighbor] === -1) {
                // Color the neighbor with the alternate color
                color[neighbor] = 1 - color[node];
                // Enqueue the neighbor for further processing
                queue.push(neighbor);
            } else if (color[neighbor] === color[node]) {
                // If the neighbor has the same color as the current node, return false
                return false;
            }
        }
    }
    // If all nodes are processed without conflict, return true
    return true;
}

// Example graph represented as an adjacency list
let graph = [
    [],         // No node 0 for simplicity (1-based indexing)
    [2, 4],     // Node 1 is connected to Node 2 and Node 4
    [1, 3],     // Node 2 is connected to Node 1 and Node 3
    [2, 4],     // Node 3 is connected to Node 2 and Node 4
    [1, 3]      // Node 4 is connected to Node 1 and Node 3
];

// Check if the graph is bipartite
let result = isBipartite(graph);
console.log("Is the graph bipartite?", result); // Output: false