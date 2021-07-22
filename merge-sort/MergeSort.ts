export class MergeSort {
  public static sort(values: number[]): number[] {
    // memoize our temporary array so it's only created once
    this.mergeSort(values, [], 0, values.length - 1);
    return values;
  }

  private static mergeSort(
    values: number[],
    temp: number[],
    start: number,
    end: number
  ): void {
    // Base-case
    if (start >= end) return;

    const middle = Math.floor((start + end) / 2);
    this.mergeSort(values, temp, start, middle);
    this.mergeSort(values, temp, middle + 1, end);
    this.mergeHalves(values, temp, start, middle, end);
  }

  private static mergeHalves(
    values: number[],
    temp: number[],
    start: number,
    middle: number,
    end: number,
  ): void {
    // Copy both halves into temp array.
    for(let i = start; i <= end; i++) {
      temp[i] = values[i];
    }

    let tempStart = start;
    let tempEnd = middle + 1;
    let current = start;

    while(tempStart <= middle && tempEnd <= end){
      if(temp[tempStart] <= temp[tempEnd]){
        values[current] = temp[tempStart];
        tempStart++;
      } else {
        values[current] = temp[tempEnd];
        tempEnd++;
      } 
      current++;
    }

    let remaining = middle - tempStart;
    for(let i = 0; i <= remaining; i++) {
      values[current + i] = temp[tempStart + i]
    }
  }
}
