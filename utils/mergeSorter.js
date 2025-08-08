export class MergeSorter {
  //constructor accepts the list we want to sort, takes an array and stores it inside the class
  constructor(data) {
    this.data = data;
  }

  // Public method to start the sorting, will call this in the mail file, returns the sorted data array
  sortBy(field) {
    this.data = this.#mergeSort(this.data, field);
    return this.data;
  }

  //Private helper method that does the recursive sorting to divide and sort
  // It splits the array in half until it's just 1 item, then merges them back in order
  #mergeSort(arr, field) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2); //get middle to index
    const left = arr.slice(0, mid); //split into left
    const right = arr.slice(mid); //split into right

    const sortedLeft = this.#mergeSort(left, field); //recursively sort left half
    const sortedRight = this.#mergeSort(right, field); // recursively sor right half

    return this.#merge(sortedLeft, sortedRight, field); //merge the sorted halves
  }
  // Merge two sorted arrays into one
  #merge(left, right, field) {
    const result = [];

    while (left.length && right.length) {
      // Compare field values (like name), ignoring uppercase vs lowercase
      if (left[0][field].toLowerCase() < right[0][field].toLowerCase()) {
        result.push(left.shift()); //take from left
      } else {
        result.push(right.shift()); //take from right
      }
    }
    // If one array still has items, add them to result
    return result.concat(left, right);
  }
}
