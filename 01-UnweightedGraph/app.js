function findShortestPath(graph, start, target) { 
    let queue = [[start]];
    let visted = new Set([start]);

    while(queue.length > 0){
      let path = queue.shift();
      let node = path[path.length -1];

      if (node === target){
        return path;
      }

      for(let neighbor of graph[node]){
        if(!visted.has(neighbor)){
          visted.add(neighbor);
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