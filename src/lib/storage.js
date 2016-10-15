export default class Storage {
    /**
     *
     * @param domNode
     */
    constructor (domNode) {
        this._domNode = domNode;
    }

    /**
     *
     * @param domNode
     */
    update (domNode) {
        this._domNode = domNode;
    }

    /**
     *
     * @returns {*}
     */
    get domNode () {
        return this._domNode;
    }
}

