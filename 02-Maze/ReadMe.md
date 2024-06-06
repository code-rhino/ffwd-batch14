# Maze

* [Chart](https://lucid.app/lucidchart/3302c30a-e75a-4ef1-b4b4-8f1de4ce44cd/edit?viewport_loc=-166%2C-89%2C1919%2C1115%2C0_0&invitationId=inv_05601feb-767a-4a36-a5fc-d376483c53db)

* [Video](https://vimeo.com/954414731/462dbea039?share=copy)

## Step-by-Step Walkthrough: Finding the Shortest Path in a Binary Maze

### Problem Description

We are given a binary maze represented as a matrix, where:
- `0` represents an open cell.
- `1` represents a blocked cell.

Our goal is to find the shortest path from the top-left corner (start) to the bottom-right corner (end) using Breadth-First Search (BFS).

### Approach

To solve this problem, we will use BFS, which is well-suited for finding the shortest path in an unweighted grid. The algorithm will explore all possible paths from the start point and track the shortest distance to the end point.

### Steps to Solve the Problem

1. **Initialize the Maze and Setup BFS:**
    - Start by defining the dimensions of the maze.
    - Initialize the BFS queue with the starting position `(0, 0)` and an initial distance of `1`.
    - Use a set to keep track of visited cells to avoid processing the same cell multiple times.

2. **Define Neighboring Cells:**
    - Create a function `getNeighbors` to find all valid neighboring cells (i.e., cells that are within bounds and are open).

3. **BFS Implementation:**
    - Dequeue the first element from the queue.
    - Check if the current cell is the end cell. If it is, return the distance.
    - Get all valid neighbors of the current cell.
    - For each neighbor, if it hasn't been visited, mark it as visited, and enqueue it with the incremented distance.

4. **Edge Cases:**
    - If the start or end cell is blocked, return `-1` immediately.

### Code

Here's the complete implementation of the algorithm in JavaScript:

```javascript
function getNeighbors(row, col, rows, cols, maze) {
    const directions = [
        [1, 0], [0, 1], [-1, 0], [0, -1]
    ];
    const neighbors = [];

    for (let [dr, dc] of directions) {
        const neighborRow = row + dr;
        const neighborCol = col + dc;

        if (
            neighborRow >= 0 &&
            neighborRow < rows &&
            neighborCol >= 0 &&
            neighborCol < cols &&
            maze[neighborRow][neighborCol] === 0
        ) {
            neighbors.push([neighborRow, neighborCol]);
        }
    }

    return neighbors;
}

function findShortestPathBinaryMaze(maze) {
    const rows = maze.length;
    const cols = maze[0].length;
    const queue = [[0, 0, 1]];
    const visited = new Set(['0,0']);

    // Check if start or end is blocked
    if (maze[0][0] === 1 || maze[rows - 1][cols - 1] === 1) return -1;

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        // If we reached the end cell
        if (row === rows - 1 && col === cols - 1) return distance;

        const neighbors = getNeighbors(row, col, rows, cols, maze);

        for (let [neighborRow, neighborCol] of neighbors) {
            if (!visited.has(`${neighborRow},${neighborCol}`)) {
                queue.push([neighborRow, neighborCol, distance + 1]);
                visited.add(`${neighborRow},${neighborCol}`);
            }
        }
    }

    return -1; // If no path is found
}

// Test the function with an example maze
const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
];

console.log(findShortestPathBinaryMaze(maze)); // Output: 9
```

### Explanation of the Code

1. **getNeighbors Function:**
    - This function takes the current cell's position and returns all valid neighboring cells that can be moved to.

2. **findShortestPathBinaryMaze Function:**
    - **Initialization:**
        - `rows` and `cols` store the dimensions of the maze.
        - `queue` is initialized with the starting position and distance `1`.
        - `visited` is a set to track visited cells.
    - **Early Exit Check:**
        - If the start or end cell is blocked, return `-1`.
    - **BFS Loop:**
        - Dequeue the first element.
        - If the current cell is the end cell, return the distance.
        - Get valid neighbors and for each neighbor, if it hasn't been visited, enqueue it with the updated distance and mark it as visited.
    - **No Path Found:**
        - If no path is found, return `-1`.
