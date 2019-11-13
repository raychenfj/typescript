function isSorted(array: number[]) {
  if (array.length === 1) {
    return true;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

export default class BinarySearch {
  private _array: number[] = [];
  constructor(array: number[]) {
    if (isSorted(array)) {
      this._array = array;
    }
  }

  get array() {
    return this._array.length ? this._array : undefined;
  }

  indexOf(num: number) {
    const array = this._array;
    let l = 0;
    let r = array.length - 1;
    let mid;
    while (l <= r) {
      mid = Math.floor((l + r) / 2);
      if (array[mid] > num) {
        r = mid - 1;
      } else if (array[mid] < num) {
        l = mid + 1;
      } else {
        return mid;
      }
    }
    return -1
  }
}
