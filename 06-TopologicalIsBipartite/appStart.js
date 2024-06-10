function isBipartite(graph) {
    let color = Array(graph.length).fill(-1);
    for(let i =0; i < graph.length; i++){
        if(color[i] === -1 && !bfs(graph, color, i)){
            return false;
        }
    }
    return false;
}


function bfs(graph, color, start){
    let queue = [start];
    color[start] = 0;
    while(queue.length > 0){
        let node = queue.shift();
        for(let neighbor of graph[node]){
            if(color[neighbor]=== -1){
                color[neighbor] = 1 - color[node];
                queue.push(neighbor);
            }else if (color[neighbor] === color[node]){
                return false;
            }
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