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
}