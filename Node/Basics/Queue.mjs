// // Array Based Approach

// class Queue{
//     constructor(){
//         this.items = [];
//     }
//     enqueue(item){
//         this.items.push(item);
//     }
//     dequeue(){
//         return this.items.shift();
//     }
//     isEmpty(){
//         return this.items.length === 0;
//     }
//     size(){
//         return this.items.length;
//     }
//     print(){
//         console.log(this.items);
//     }
//     peek(){
//         return this.items[0];
//     }
// }

// Node based approach

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0;
    }
    enqueue(value) {
        const newNode = new Node(value, null);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const temp = this.first.value;
        this.first = this.first.next;
        this.size--;
        return temp;
    }
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.first.value;
    }
    isEmpty() {
        return this.size === 0;
    }
    size() {
        return this.size;
    }
    print() {
        console.log(this.first);
        while (this.first != null) {
            console.log(this.first.value);
            this.first = this.first.next;
        }
    }
}

export default Queue