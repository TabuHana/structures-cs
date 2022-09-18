// HASH TABLE

const hash = (key, size) => {
  let hashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }

  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    // You have the choice to store arrays or linkedlists
    // Here I am storing maps
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size);
    // Set is a built in method on maps
    this.buckets[idx].set(key, value);
  }

  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    // Delete is a built in method on maps
    this.buckets[idx].delete(key);
    return deleted;
  }

  search() {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const hashTable = new HashTable();

hashTable.insert('hello', 'world');
hashTable.insert('asdf', '1234');
hashTable.insert('pokemon', 'pikachu');
hashTable.insert('hamburger', 'pizza');

console.log(hashTable);