import Core from './lib/core';

class JQueryFree extends Core {
    constructor(domNode) {
        super();
        this.domNode = domNode;
        this.isInstanced = true;
        return this;
    }

    /**
     *
     * @param name
     */
    call(name) {
        let args = [].slice.call(arguments);
        args.shift();
        if(this.domNode[name]) {
            if (typeof this.domNode[name] === 'function') {
                return this.domNode[name](...args);
            }
            return this.domNode[name];
        }
        else if (this[name] === undefined) {
            throw new Error('No valid propriety found');
        } else {
            return this[name](...args);
        }
    }
}

var root;
if (window) {
    root = window;
} else if (global) {
    root = global;
} else {
    root = {};
}

var wrapper = (domNode) => {
    if (domNode.isInstanced) {
        return domNode;
    }
    return new JQueryFree(domNode);
};

var isNode = false;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = wrapper;
    root.jqFree = wrapper;
    isNode = true;
} else {
    root.jqFree = wrapper;
}