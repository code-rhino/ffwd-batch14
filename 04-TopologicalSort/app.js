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