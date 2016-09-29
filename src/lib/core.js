export default class Core{
    constructor() {

    }

    /**
     *
     * @param selector
     * @returns {*}
     */
    closest(selector) {
        if (this.domNode.closest) {
            return this.domNode.closest(selector);
        }
        var matchesSelector =
            this.domNode.matches ||
            this.domNode.webkitMatchesSelector ||
            this.domNode.mozMatchesSelector ||
            this.domNode.msMatchesSelector;
        while (this.domNode) {
            if (matchesSelector.call(this.domNode, selector)) {
                break;
            }
            this.domNode = this.domNode.parentElement;
        }
        return this.domNode;
    }
}