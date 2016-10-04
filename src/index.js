import Core from './lib/core';

class JQueryFree extends Core {
    constructor(domNode) {
        super();
        this.domNode = domNode;
        this.isInstanced = true;
        this.lastSelected = domNode;
        return this;
    }

    /**
     * @description shorthand
     * @param name
     * @private
     */
    _(name) {
        let args = [].slice.call(arguments);
        return this._call(name, args);
    }

    /**
     * @description get latest selected el
     */
    get() {
        return this.lastSelected;
    }

    /**
     *
     * @param name
     * @param args
     * @returns {*}
     * @private
     */
    _call(name, args) {
        args.shift();
        if(this.domNode[name]) {
            if (typeof this.domNode[name] === 'function') {
                this.lastSelected = this.domNode[name](...args);
                return this;
            }
            return this.get()[name];
        }
        else if (typeof this[name] !== 'function') {
            throw new Error('No valid propriety found');
        } else {
            this.lastSelected = this[name](...args);
            return this;
        }
    }
}

var wrapper = (domNode) => {
    if (domNode.isInstanced) {
        return domNode;
    }
    return new JQueryFree(domNode);
};

var root;
if (typeof window !== 'undefined') {
    root = window;
} else if (typeof global !== 'undefined') {
    root = global;
} else {
    root = {};
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = wrapper;
    root._$ = wrapper;
} else {
    root._$ = wrapper;
}


