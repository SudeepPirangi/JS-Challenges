var RecentCounter = function () {
  this.calls = [];

  this.append = function (t) {
    this.calls.push(t);
    while (this.calls[0] < t - 3000) {
      this.calls.shift();
    }
  };
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.append(t);
  return this.calls.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
obj.ping(1);
obj.ping(100);
obj.ping(3001);
obj.ping(3002);
