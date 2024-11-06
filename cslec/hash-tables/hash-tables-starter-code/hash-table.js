class Node {
  constructor(key, value) {
    this.data = [key, value];
    this.next = null;
  }

  // no parenthesis for the key
  get key() {
    return this.data[0]
  }
  get value() {
    return this.data[1]
  }
}

// note: this is a simpler LinkedList class than in the Linked List lesson
class LinkedList {

  constructor(){
    this.head = null
  }

  add(key, value){

    let node = new Node(key, value)

    if (!this.head) {

      return this.head = node

    } 

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node

    return node

  }
  delete(key){

    if (!this.head) return false;

    let current = this.head

    if (current.key === key) {
        this.head = walker.next;
        return walker
    }

    while (current.next) {

      if (current.next.key === key) {
        current.next = current.next.next
        return current.next
      }

      current = current.next
    }
    
    return false;

  }

  search(key){

    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (current.key === key) return current;
      current = current.next;
    }

    return false;

  }  
}

class HashTable {
  constructor(size) {
    this.table = new Array(size).fill(null);
  }

  hash(key) {
    let sum = 0
    key.split('').forEach((char) => sum += char.charCodeAt())
    return sum % this.table.length;
  }

  insert(key, value) {
    // hash the key to get an integer index

    // if there's no linked list at that index in the table 
      // create one and add it
      // and insert this key value pair into the new Linked list

    // if there's a linked list at that index
      // if a node already exists with the key, update it the data in that node to store the new value
    
    // otherwise
      // add a new node with the given value to the end of the linked list

    // for the convenience of the user, you might wish to return the node, or you can just return true
  }

  delete(key) {
    // lookup the key (i.e. hash it to get an index)
    // if the key is, in fact, in the linked list, delete that Node and return it
    // if the key wasn't found return -1
  }

  search(key) {
    // hash key to get index
    // search the linked list at the index
    // if the key is found, return the Node
    // if not, return -1
  }

}


module.exports = {
  Node,
  LinkedList,
  HashTable
}