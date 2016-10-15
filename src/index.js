import Core from './lib/core';
import Storage from './lib/storage';

class JQueryFree extends Core {
    constructor(domNode) {
        super();
        this.storage = new Storage(domNode);
        this.isInstanced = true;
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
        return this.storage.domNode;
    }

    /**
     *
     * @param name
     * @param args
     * @returns {*}
     */
    checkNative(name, args) {
        let node = this.storage.domNode;
        if (node[name]) {
            if (typeof node[name] === 'function') {
                this.storage.update(node[name](...args));
                return this;
            }
            return this.get()[name];
        }
        return null;
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
        let native = this.checkNative(name, args);
        if (native) {
            return native;
        } else if (typeof this[name] !== 'function') {
            throw new Error('No valid propriety found');
        } else {
            return this[name](...args);
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


