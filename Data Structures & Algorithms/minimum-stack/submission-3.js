class MinStack {
    minValue;
    maxValue;
    stack;
    constructor() {
        this.stack = [];
        this.minValue = [];
        this.maxValue = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        this.pushToMinValue(val);
        // console.log({minValues: this.minValue});
        this.pushToMaxValue(val);
        //  console.log({maxValues: this.maxValue});

        return null;
    }

    pushToMinValue(val) {
        if (!this.minValue.length) {
            this.minValue.push(val);
            return;
        }

        // if (this.minValue[this.minValue.length -1] === val)  return;
        
        if (this.minValue[this.minValue.length -1] >= val) {
            this.minValue.push(val);
        }
        
    }

    pushToMaxValue(val) {
        if (!this.maxValue.length) {
            this.maxValue.push(val);
            return;
        }

        // if (this.maxValue[this.maxValue.length -1] === val) return;
        
        if (this.maxValue[this.maxValue.length -1] <= val) {
            this.maxValue.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.pop();

        if (this.minValue[this.minValue.length -1] === popped) {
            this.minValue.pop();
        }

        if (this.maxValue[this.maxValue.length -1] === popped) {
            this.maxValue.pop();
        }

        return popped;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.length ? this.stack[this.stack.length -1] :  null;
    }

    /**
     * @return {number}
     */
    getMin() {
        const min = this.minValue.length ? this.minValue[this.minValue.length -1] : null;
        return min;
    }
}
