## Step-by-Step Walkthrough: Finding the Shortest Path for a Knight on a Chessboard using BFS

[Video](https://vimeo.com/954382867/dd52a4539f?share=copy)

This walkthrough explains how to implement a Breadth-First Search (BFS) algorithm to find the shortest path for a knight on a chessboard.

### 1. Introduction

In this example, we will use BFS to determine the minimum number of moves a knight needs to reach a target position on a chessboard. A knight moves in an "L" shape: two squares in one direction and then one square perpendicular to that, or one square in one direction and then two squares perpendicular to that.

### 2. Problem Description

- **Board size**: 8x8 (standard chessboard)
- **Knight's starting position**: (0, 0)
- **Target position**: (7, 7)

### 3. Algorithm Overview

We will use BFS because it explores all possible moves level by level, ensuring the shortest path is found.

### 4. Implementation Steps

#### Step 1: Define the Knight's Moves

Create a function `getKnightMoves` to determine all possible moves a knight can make from a given position.

```javascript
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
```

#### Step 2: Implement the BFS Algorithm

Create a function `findMinimumMoves` to use BFS for finding the shortest path.

```javascript
function findMinimumMoves(start, target, boardSize = 8) {
  const queue = [[...start, 0]]; // Initialize the queue with the start position and 0 moves
  const visited = new Set([`${start[0]},${start[1]}`]); // Track visited positions
  
  while (queue.length > 0) {
    const [row, col, moves] = queue.shift(); // Dequeue the next position
    
    // Check if we have reached the target
    if (row === target[0] && col === target[1]) return moves;
    
    // Explore all possible knight moves from the current position
    for (let [newRow, newCol] of getKnightMoves(row, col, boardSize)) {
      if (!visited.has(`${newRow},${newCol}`)) {
        queue.push([newRow, newCol, moves + 1]); // Enqueue the new position with an incremented move count
        visited.add(`${newRow},${newCol}`); // Mark the new position as visited
      }
    }
  }
  return -1; // Return -1 if the target is not reachable
}
```

#### Step 3: Execute the Algorithm

Test the algorithm with the knight starting at (0, 0) and targeting (7, 7).

```javascript
// Example usage
const start = [0, 0];
const target = [7, 7];
console.log(`Minimum moves: ${findMinimumMoves(start, target)}`); // Outputs: Minimum moves: 6
```

### 5. Full Code Example

Here's the complete code combining the knight's moves and BFS algorithm:

```javascript
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
  const visited = new Set([`${start[0]},${start[1]}`]);
  
  while (queue.length > 0) {
    const [row, col, moves] = queue.shift();
    
    if (row === target[0] && col === target[1]) return moves;
    
    for (let [newRow, newCol] of getKnightMoves(row, col, boardSize)) {
      if (!visited.has(`${newRow},${newCol}`)) {
        queue.push([newRow, newCol, moves + 1]);
        visited.add(`${newRow},${newCol}`);
      }
    }
  }
  return -1;
}

// Example usage
const start = [0, 0];
const target = [7, 7];
console.log(`Minimum moves: ${findMinimumMoves(start, target)}`); // Outputs: Minimum moves: 6
```

### Conclusion

This walkthrough demonstrates how to use BFS to solve the problem of finding the shortest path for a knight on a chessboard. By systematically exploring all possible moves and using a queue to track the current path, we ensure that the shortest path is found efficiently.