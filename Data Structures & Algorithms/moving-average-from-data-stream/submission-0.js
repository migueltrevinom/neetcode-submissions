class MovingAverage {
    divider = 0;
    myArray = [];
    /**
     * @param {number} size
     */
    constructor(size) {
        this.divider = size;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) { 
        this.myArray.push(val);

        if (this.myArray.length > this.divider) {
            this.myArray.shift(0);
        } 
        
        let total = 0;

        for (let index = 0; index < this.myArray.length; index++) {
            total += this.myArray[index];
        }

        return total / this.myArray.length;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
