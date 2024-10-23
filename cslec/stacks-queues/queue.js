class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(data) {
        let newNode = new Node (data, null, this.tail);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
    }

    dequeue() {
        let data = this.head.data;
        this.head = this.head.next;
        return data;
    }

    peek() {
        return !this.head ? "Queue is empty" : this.head.data;
    }

    isEmpty() {
        return !this.head;
    }


}