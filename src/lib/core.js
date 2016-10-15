export default class Core {
    constructor() {
        this.storage = null;
    }

    /**
     *
     * @param selector
     * @param func
     * @returns {*}
     * @private
     */
    _getAndCheckNative(selector, func) {
        let node = this.storage.domNode;
        if (node[func]) {
            this.storage.update(node[func](selector));
            return this;
        }
        return null;
    }

    /**
     *
     * @param selector
     * @returns {*}
     */
    closest(selector) {
        let t = this._getAndCheckNative(selector, 'closest');
        if (t) { return t; }
        let node = this.storage.domNode;
        var matchesSelector =
            node.matches ||
            node.webkitMatchesSelector ||
            node.mozMatchesSelector ||
            node.msMatchesSelector;
        while (node) {
            if (matchesSelector.call(node, selector)) {
                break;
            }
            node = node.parentElement;
        }
        this.storage.update(node);
        return this;
    }

    /**
     *
     * @param className
     */
    addClass(className) {
        let node = this.storage.domNode;
        let nodes;
        let nodesAll = Array.prototype.slice.call(node);
        if (nodesAll.length) {
            nodes = nodesAll;
        } else {
            nodes = [node];
        }
        nodes.forEach((n) => {
            if ((n.className).indexOf(className) === -1) {
                n.className += ` ${className}`;
            }
        });
        this.storage.update(node);
        return this;
    }
}