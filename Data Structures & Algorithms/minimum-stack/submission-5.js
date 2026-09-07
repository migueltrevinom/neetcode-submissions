class MinStack {
    minValue;
  
    stack;
    constructor() {
        this.stack = [];
        this.minValue = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        this.pushToMinValue(val);
        
        return null;
    }

    pushToMinValue(val) {
        if (!this.minValue.length) {
            this.minValue.push(val);
            return;
        }
        
        if (this.minValue[this.minValue.length -1] >= val) {
            this.minValue.push(val);
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
