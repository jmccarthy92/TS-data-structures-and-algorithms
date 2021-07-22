export function binarySearch<T>(arr: T[], find: T): boolean {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if(find > arr[mid]) {
            left = mid + 1;
        } else if(find < arr[mid]) {
            right = mid - 1;
        } else { // ===
            return true;
        }
    }
    return false;
}