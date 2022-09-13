
// Import the Promise IndexedDB helper from IDB
import { openDB } from 'idb';

// Open a database and export it so it can be used elsewhere
export const database = openDB('my-db', 1, {
  upgrade(db) {
    // Create a "comments" object store, with "_id" as the key, and let that key automatically get added (and increment) if it's not already present when being inserted
    db.createObjectStore('comments', {
      keyPath: '_id',
      autoIncrement: true,
    });
  },
});
