export function insertionSort(n: number, arr: number[]): number[] {
    // Write your code here
    // [4,3,1]
    for(let i = 0; i < n; i++) {
        let j =  i - 1; //1: -1,  2: 0  3: 1
        let current = arr[i]; // 1: 4   2: 3    3: 1
        while(j >= 0 && arr[j] > current) { // 2: 4 > 3     3: 3 > 1
            arr[j + 1] = arr[j] // 2: arr[1] = 4    3: arr[2] = 4  arr[1] = 3 
            j--; 
        }
        arr[j + 1] = current; // 1: arr[0] = 4.   2: arr[0] = 3     3: arr[0] = 1
        if(i > 0)
          console.log(arr.join(' ')); // 2: [3,4,1]   3: [1,3,4]
    }
    return arr;
}