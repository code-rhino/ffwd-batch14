
function dfs(graph, node, visted, stack){
    if(visted.has(node))
        return;
    visted.add(node);
    for(let neighbor of graph[node]){
        dfs(graph, neighbor, visted, stack)
    }
    stack.push(node);
}

function topologicalSort(graph){
    let visted = new Set();
    let stack = [];

    for (let node in graph){
        if(!visted.has(node)){
            dfs(graph, node, visted, stack);
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

//Topological Sort: [ 'A', 'C', 'F', 'B', 'E', 'D' ]
