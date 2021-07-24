export function intersection(arrayA: number[], arrayB: number[]): number[]{
    let pointerA = 0;
    let pointerB = 0;
    let result: number[] = [];
    while(pointerA < arrayA.length && pointerB < arrayB.length) {
        if(arrayA[pointerA] < arrayB[pointerB]) {
            pointerA++;
        } else if (arrayA[pointerA] > arrayB[pointerB]) {
            pointerB++;
        } else {
            result.push(arrayA[pointerA]);
            pointerB++;
            pointerA++;
        }
    }
    return result;
}