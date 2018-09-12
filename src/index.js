class Sorter {
  constructor() {
    // your implementation
      this.array = [];
      this.comp = function (a, b) {
        return a - b;
      }
  }

  add(element) {
    // your implementation
      this.array.push(element);
  }

  at(index) {
    // your implementation
      return this.array[index];
  }

  get length() {
    // your implementation
      return this.array.length;
  }

  toArray() {
    // your implementation
      return this.array;
  }

  sort(indices) {
    // your implementation
      let arr = [];
      indices.sort();
      // console.log("Массив отсортированных индексов:" + indices);
      for(let i = 0; i <= indices.length - 1; i++) {
        arr.push(this.array[indices[i]]);
      }
      arr.sort(this.comp);
      // console.log("Отсортированный масив: " + arr);
      for(let i = 0; i <= indices.length - 1; i++) {
          this.array[indices[i]] = arr[i];
      }
      // console.log("Результат сортировки по индексам: " + this.array);
  }

  setComparator(compareFunction) {
    // your implementation
      this.comp = compareFunction;
  }
}

module.exports = Sorter;