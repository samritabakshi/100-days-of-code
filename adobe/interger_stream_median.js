/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.minHeap = new MinPriorityQueue({ priority: x => x });
    this.maxHeap = new MaxPriorityQueue({ priority: x => x });

};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
 this.minHeap.enqueue(num);

    if(this.minHeap.size() > this.maxHeap.size()) {
        const val = this.minHeap.dequeue().element;
        this.maxHeap.enqueue(val);
    }

    if(this.maxHeap.size() > this.minHeap.size()) {
        const val = this.maxHeap.dequeue().element;
        this.minHeap.enqueue(val);
    }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
 if(this.minHeap.size() === this.maxHeap.size()) {
        const num1 = this.minHeap.front().element;
        const num2 = this.maxHeap.front().element;
        return (num1 + num2) / 2;
    }

    if(this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.front().element;
    }
    return this.maxHeap.front().element;
};

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/