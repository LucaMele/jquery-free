import { expect } from 'chai';
import jsdom from 'jsdom';
import _$ from '../../index';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
var doc = global.document;
global.window = doc.defaultView;
global.navigator = {userAgent: 'node.js'};

describe('_$ core', () => {

    beforeEach(() => {
        let div1 = doc.createElement('div');
        div1.className='tester-one';
        div1.id='tester-id-one';
        let div2 = doc.createElement('div');
        div2.className='tester-two';
        let div3 = doc.createElement('div');
        div3.className='tester-three';
        let div4 = doc.createElement('div');
        div4.className='tester-four';
        let div5 = doc.createElement('div');
        div5.className='tester-five';
        div4.appendChild(div5);
        div3.appendChild(div4);
        div2.appendChild(div3);
        div1.appendChild(div2);
        doc.body.appendChild(div1);
    });

    it('closest() works as expected', () => {
        expect(_$(doc.querySelector('.tester-five')).closest('.tester-one').get().id).to.equal('tester-id-one');
    });

    it('is chainable', () => {
        expect(_$(doc.querySelector('.tester-five')).closest('.tester-three').closest('.tester-one').get().id).to.equal('tester-id-one');
    });

    it('addClass works as expected', () => {
        expect(_$(doc.querySelector('.tester-five')).addClass('test-add-class').get().className).to.equal('tester-five test-add-class');
        expect(_$(doc.querySelector('.tester-five')).addClass('test-add-other').get().className).to.equal('tester-five test-add-class test-add-other');
        _$(doc.querySelectorAll('div')).addClass('add-class-all');
        expect(!!~doc.querySelector('.tester-five').className.indexOf('add-class-all')).to.equal(true);
    });

});