// Array based apporeach

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        else {
            return this.items.pop();
        }
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        else {
            return this.items[this.items.length - 1];
        }
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items);
    }
}

// export default Stack;

// Node Based Approach

// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next;
//   }
// }
// class Stack {
//   constructor() {
//     this.top = new Node(null, null);
//     this.size = 0;
//   }
//   push(value) {
//     const newNode = new Node(value, this.top);
//     this.top = newNode;
//     this.size++;
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     } else {
//       const poppedNode = this.top;
//       this.top = this.top.next;
//       this.size--;
//       return poppedNode.value;
//     }
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     } else {
//       return this.top.value;
//     }
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   size() {
//     return this.size;
//   }
//   print() {
//     console.log(this.top);
//   }
//   search(value) {
//     let current = this.top;
//     while (current) {
//       if (current.value === value) {
//         return true;
//       }
//       current = current.next;
//     }
//     return false;
//   }
// }

function printNextGreatest(arr, n) {
  var s = new Stack();

  s.push(arr[0]);

  for (var i = 1; i < n; i++) {
    if (s.size() == 0) {
      s.push(arr[i]);
    } else {
      while (!s.isEmpty() && s.peek() < arr[i]) {
        console.log(s.pop() + "-->" + arr[i]);
      }

      s.push(arr[i]);
    }
  }

  while (!s.isEmpty()) {
    console.log(s.pop() + "-->" + -1);
  }
}


export {printNextGreatest};

export default Stack;
