const EventEmitter = require("events");
class AsyncQueue extends EventEmitter {
  myQueue = [];
  interval = 250;
  timer = null;

  constructor() {
    super();
    this.on("interval", this.changeInterval);
  }

  enqueue = (item) => {
    this.myQueue.push(item);
    this.emit("enqueued", item);
  };

  peek = () => this.myQueue[0];

  print = () => this.myQueue;

  getCurrentInterval = () => this.interval;

  start = () => {
    this.timer = setInterval(() => {
      if (this.myQueue.length) {
        const [popper] = this.myQueue.splice(0, 1);
        this.emit("dequeued", popper);
        console.log("interval whle emitting", this.interval, popper);
      } else {
        clearInterval(this.timer);
      }
    }, this.interval);
  };

  pause = () => {
    clearInterval(this.timer);
  };

  changeInterval = (newInterval) => {
    this.interval = newInterval;
  };
}

module.exports = AsyncQueue;
