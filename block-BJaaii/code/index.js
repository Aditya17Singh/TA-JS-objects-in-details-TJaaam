class Stack {
    constructor(){
        this.stack = [];
    }
    push(elm){
        this.stack.push(elm)
        return this.stack;
    }
    pop(){
        this.stack.pop()
        return this.stack;
    }
    peek(index = this.stack - 1){
        return this.stack[index]
    }
    reverse(){
        return this.stack.reverse()
    }
    isEmpty(){
        return !(this.stack.length > 0)
    }
    displayStack(){
        return this.stack.join(" ")
    }
    get length(){
        return this.stack.length;
    }
}