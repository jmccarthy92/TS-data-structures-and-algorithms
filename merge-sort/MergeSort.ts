export class MergeSort {
  public static run(values: number[]): void {
    // memoize our temporary array so it's only created once
    this.mergeSort(values, [], 0, values.length - 1);
  }

  private static mergeSort(
    values: number[],
    temp: number[],
    leftStart: number,
    rightEnd: number
  ): void {
    // Base-case
    if (leftStart >= rightEnd) return;

    const middle = Math.floor((rightEnd + leftStart) / 2);
    this.mergeSort(values, temp, leftStart, middle);
    this.mergeSort(values, temp, middle + 1, rightEnd);
    this.mergeHalves(values, temp, leftStart, rightEnd);
  }

  private static mergeHalves(
    values: number[],
    temp: number[],
    leftStart: number,
    rightEnd: number
  ): void {
    const leftEnd = Math.floor((rightEnd + leftStart) / 2);
    let rightStart = leftEnd + 1;
    const size = rightEnd - leftStart + 1;

    let right = rightStart;
    let left = leftStart;
    let index = leftStart;

    while (left <= leftEnd && right <= rightEnd) {
      if (values[left] <= values[right]) {
        temp[index] = values[left];
        left++;
      } else {
        temp[index] = values[right];
        right++;
      }
      index++;
    }

    for (
      let leftIndex = left, tempIndex = index;
      leftIndex <= leftEnd;
      leftIndex++, tempIndex++
    ) {
      temp[tempIndex] = values[leftIndex];
    }
    for (
      let rightIndex = right, tempIndex = index;
      rightIndex <= rightEnd;
      rightIndex++, tempIndex++
    ) {
      temp[tempIndex] = values[rightIndex];
    }
    for (let i = leftStart; i < leftStart + size; i++) {
      values[i] = temp[i];
    }
  }
}
