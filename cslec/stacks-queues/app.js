class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    
    constructor() {
        this.head = null
    }

    push(data) {
        this.head = new Node(data, this.head)
    }

    pop() {
        const data = this.head.data
        this.head = this.head.next
        return data
    }

    peek() {
        return this.head.data;
    }

    isEmpty() {
        return !this.head;
    }

}


class StackArray {

    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

}

const polyaStack = new StackArray();
polyaStack.push(4)
polyaStack.push(8)
polyaStack.push(12)
polyaStack.pop();
console.log(polyaStack.peek())
console.log(polyaStack.isEmpty());
console.log(polyaStack);
