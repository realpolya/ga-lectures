/* -------------NODE---------------*/
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

/* -------------LINKED LIST---------------*/
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
        this.head = current.next;
        return current
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

/* -------------HASH TABLE---------------*/
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
    
    let index = this.hash(key)

    // if there's no linked list at that index in the table
    if (!this.table[index]) {

      let newList = new LinkedList()
      this.table[index] = newList

      newList.add(key, value)
      return true

    }

    // if there's a linked list at that index
    let searched = this.table[index].search(key)

    if (!searched) {
      this.table[index].add(key, value)
      return true
    }

    searched.data = [key, value]
    return true
    
  }

  delete(key) {
    // lookup the key (i.e. hash it to get an index)
    let index = this.hash(key)

    // if the key wasn't found return -1
    if (!this.table[index]) return -1

    // if the key is, in fact, in the linked list, delete that Node and return it
    let searched = this.table[index].search(key)

    if (!searched) return -1
    let deleted = this.table[index].delete(key)
    return deleted

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