
class Node {

    constructor(data) {

        this.data = data
        this.next = null
    }

}

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

    prependNode(data) {
        
        const node = new Node(data);

        if (this.head) {
            
            let oldHead = this.head;
            node.next = oldHead;
            return this.head = node;
            
        }

        return this.head = node;

    }

    pop() {

        let removedNode;

        if (this.head) {

            let current = this.head.next;

            // if list only has one node
            if (!current) {
                removedNode = this.head;
                this.head = null;
                return removedNode;
            }

            // if list has two nodes
            if (!current.next) {
                removedNode = this.head.next;
                this.head.next = null
                return removedNode;
            }

            // if list has more than two nodes
            let secondToLast = false;

            while (!secondToLast) {

                if (!current.next.next) {
                    secondToLast = current;
                } 

                current = current.next;

            }

            removedNode = secondToLast.next;
            secondToLast.next = null
            return removedNode;

        }

        return null;

    }

    removeFromFront() {

        // reassign head to the next node
        let removedNode = this.head;
        this.head = this.head.next;
        return removedNode;

    }

    // FIXME: 
    insertAt(index, data) {

        const node = new Node(data);

        if (index === 0) {

            return this.prependNode(data)

        }

        if (this.head) {

            let count = 0;
            let current = this.head;

            // cycle through the list with while loop
            while (count <= index - 1) {

                current = current.next;
                count++;

            }

            let relinked = current.next;
            node.next = relinked;
            return current.next = node;

        }

        return this.head = node;


        // keep count

        // once count is 1 less than the index

        // set that node's next to 

    }

}

// initialize linked list
const newList = new LinkedList();

newList.appendNode('1.Firefly');
newList.appendNode('2.SongTwo');
newList.appendNode('3.Abba');
newList.appendNode('4.Drama Queen');
newList.prependNode('0.Here we go');

console.log(newList);

console.log('-----testing the pop now-----');

newList.pop();






module.exports = {
    Node,
    LinkedList
}