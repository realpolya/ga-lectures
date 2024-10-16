
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let node = new Node(5);
console.log(node.data);
console.log(node);
console.log(typeof(Node));

class LinkedList {

    constructor() {
        
        this.head = null

    }

    appendNode(data) {

        const node = new Node(data);

        // if the linked list already had a head
        if (this.head) {

            let walker = this.head;
            while (walker.next) {
                walker = walker.next;
            }
            return walker.next = node;

        } 

        return this.head = node;
        
    }
}

module.exports = {
    Node,
    LinkedList
}