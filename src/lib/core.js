export default class Core{
    constructor() {

    }

    /**
     *
     * @param selector
     * @returns {*}
     */
    closest(selector) {
        if (this.lastSelected.closest) {
            return this.lastSelected.closest(selector);
        }
        var matchesSelector =
            this.lastSelected.matches ||
            this.lastSelected.webkitMatchesSelector ||
            this.lastSelected.mozMatchesSelector ||
            this.lastSelected.msMatchesSelector;
        while (this.lastSelected) {
            if (matchesSelector.call(this.lastSelected, selector)) {
                break;
            }
            this.lastSelected = this.lastSelected.parentElement;
        }
        return this.lastSelected;
    }
}