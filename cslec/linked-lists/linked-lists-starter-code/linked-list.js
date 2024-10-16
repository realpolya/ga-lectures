
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
            console.log('head is', typeof(this.head));
            while (walker.next) {
                walker = walker.next;
            }
            return walker.next = node;

        } 

        return this.head = node;
        
    }

    prependNode(data) {
        
        const node = new Node(data);

        if (this.head) {
            
            let oldHead = this.head;
            node.next = oldHead;
            return this.head = node;
            
        }

        return this.head = node;

    }
}

const songOne = new Node('Firefly');
console.log(typeof(LinkedList))

// initialize linked list
const newList = new LinkedList();

newList.appendNode(songOne);
const songTwo = new Node('SongTwo');
newList.appendNode(songTwo);
console.log(newList);

module.exports = {
    Node,
    LinkedList
}