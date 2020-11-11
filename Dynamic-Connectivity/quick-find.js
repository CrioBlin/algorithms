class QuickFind {
  constructor(length) {
    this.array = [];
    for(let i = 0; i < length; i++) {
      this.array.push(i);
    }
  }

  // Connecting nodes first with all of second nodes
  union(first, second) {
    let firstID = this.array[first];
    let secondID = this.array[second];

    for(let i = 0; i <= this.array.length; i++) {
      if(this.array[i] == firstID) {
        this.array[i] = secondID;
      }
    }
    console.log(this.array);
  }

  // Check whether first and second nodes are connected
  connected(first, second) {
    if(this.array[first] == this.array[second]) {
      return true;
    } else {
      return false;
    }
  }
}
// O(n^2)


// [0][1][2]
//  0  1  2
//  0  0  2
//  0->1  2
//  0  0  0
//  0->1->2
const n = prompt('Enter number');
let q = new QuickFind(Number(n));
console.log(q.array);