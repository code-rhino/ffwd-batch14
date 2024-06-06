function getKnightMoves(row, col, boardSize) {
    const directions = [
      [2, 1], [1, 2], [-1, 2], [-2, 1],
      [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    const moves = [];
    
    for (let [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
        moves.push([newRow, newCol]);
      }
    }
    return moves;
  }
  
  function findMinimumMoves(start, target, boardSize = 8) {
    const queue = [[...start, 0]];
    const visted = new Set([`${start[0]}, ${start[1]}`]);
    while(queue.length > 0){
        const [row, col, moves] = queue.shift();
        if(row === target[0] && col === target[1]) return moves;

        for(let[newRow, newCol] of getKnightMoves(row, col, boardSize)){
            if(!visted.has(`${newRow},${newCol}`))
                queue.push([newRow, newCol, moves +1])
                visted.add(`${newRow}, ${newCol}`)
        }
    }
    return -1;
  }
  
  // Example usage
  const start = [0, 0];
  const target = [7, 7];
  console.log(`Minimum moves: ${findMinimumMoves(start, target)}`); // Outputs: Minimum moves: 6