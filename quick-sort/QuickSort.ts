export class QuickSort {

    static sort(array: number[]): number[] {
        new QuickSort().quickSort(array, 0, array.length - 1);
        return array;
    }

    private quickSort(array: number[], left: number, right: number): void {
        if(left >= right) return;
        const pivot = array[Math.floor((left + right) / 2)]; // middle element
        const index = this.partition(array, pivot, left, right);
        this.quickSort(array, left, index - 1);
        this.quickSort(array, index, right);
    }

    private partition(array: number[], pivot: number, left: number, right: number): number {
        while(left <= right) {
            
            while(array[left] < pivot) left++; // move left pointer right until we find left side elemnent greater

            while(array[right] > pivot) right--; // move right pointer left until we find right elemenet lesser

            if(left <= right) {
                // swap elements and increment/decrement pointers
                this.swap(array, left, right)
                left++, right--;
            }  
        }
        return left;
    }

    public swap(arr: number[], left: number, right: number): void {
        const temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
    }
}
