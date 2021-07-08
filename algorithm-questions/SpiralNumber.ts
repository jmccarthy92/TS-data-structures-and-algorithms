// input = 3  
// 123   3 2 2 1 1
// 894
// 765

// input = 4
// 01 02 03 04    4 3 3 2 2 1 1
// 12 13 14 05
// 11 16 15 06
// 10 09 08 07
function spiral(n: number): any {
    if(n < 1) return null;
    const spiral: number[][] = fillNxNMatrix(n);
    recurseSpiral(n, spiral, n, 1);
    return spiral;
}

function fillNxNMatrix(n: number): number[][] {
    return [...Array(n)].map(x=>Array(n).fill(0))       
}


function recurseSpiral(matrixSize: number, spiral: number[][], size: number, currentValue: number): void {
    if(size < 0) return;
    let row, col;
    row = col = Math.floor((matrixSize - size) / 2);
    if(size === 1) {
        spiral[row][col] = currentValue;
        return;
    }

    for(let i = 0; i < size - 1; i++) {
        spiral[row][col++] = currentValue++;
    }
    for(let i = 0; i < size - 1; i++) {
        spiral[row++][col] = currentValue++;
    }
    for(let i = 0; i < size - 1; i++) {
        spiral[row][col--] = currentValue++;
    }
    for(let i = 0; i < size - 1; i++) {
        spiral[row--][col] = currentValue++;
    }
    recurseSpiral(matrixSize, spiral, size - 2, currentValue);
}

