
// Create a new state manager
class StoreManager {
  constructor(init = {}) {
    // Grab the current "this" context
    const self = this;
    // Create an array for subscribers
    this._subscribers = [];
    // Create the internal state proxy
    this._state = new Proxy(init, {
      set(target, key, value) {
        // Set the key equal to the value
        target[key] = value;

        // Loop through each subscriber and call them
        for (const subscriber of self._subscribers) {
          subscriber(target);
        }

        // Return true to indicate that the set was successful
        return true;
      },
    });
  }

  // Let things subscribe to the state manager
  subscribe(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Callback is not a function');
    }
    this._subscribers.push(cb);
    cb(this._state);
  }

  // Action to add a comment to the state
  addComment(comment) {
    if (!comment.date) {
      comment.date = new Date();
    }

    this._state.comments.push(comment);
    this._state.comments = this._state.comments;
  }
}

export const store = new StoreManager({ comments: [] });
