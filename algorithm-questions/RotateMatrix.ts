export function rotateMatrix<T>(arr: T[][]): void { 
    let size = arr[0].length

    for(let row = 0; row < Math.floor(size /2); row++) {
        for(let col = row; col < size - row -1; col++) {
            let temp = arr[row][col];

            arr[row][col] = arr[size - col - 1][row];
            arr[size - col - 1][row] = arr[size - 1 - row][size - col - 1];
            arr[size - 1 - row][size - col - 1] = arr[col][size - 1 - row];
            arr[col][size - 1 - row] = temp;
        }
    }
 } 