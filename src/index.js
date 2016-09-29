import Core from './lib/core';

class JQueryFree extends Core {
    constructor(domNode) {
        super();
        this.domNode = domNode;
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