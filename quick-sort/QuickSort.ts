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
                const temp = array[right];
                array[right] = array[left];
                array[left] = temp;
                left++, right--; 
            }  
        }
        return left;
    }
}


function combinations(num: number) {
    const result: number[][] = [];
    combinationsRecursive([], num.toString().split('').map(num => +num), result);
    return result;
}

function combinationsRecursive(active: number[], rest: number[], result: number[][]) {
    if(!rest.length) {
        if(active.length) result.push(active);
    } else {
        combinationsRecursive([...active, rest[0]], rest.slice(1,rest.length), result)
        combinationsRecursive(active, rest.slice(1,rest.length), result)
    }
}