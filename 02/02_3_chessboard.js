let size_n = 15;
let board = "";
for (let i = 0; i < size_n; i++) {
    for (let j = 0; j < size_n; j++) {
        if ((i + j) % 2 == 0) board += " ";
        else board += "#";
    }
    board += "\n";
}
console.log(board);