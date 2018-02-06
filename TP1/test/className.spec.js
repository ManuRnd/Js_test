let className=require('../src/className.js');
let assert = require('chai').assert;



describe('className', function() {
    it('element has already class',function() {
        let element= {className:'card'};
        let tmp=element.className;
        className.addClass(element,'card');
        assert.equal(element.className,tmp);

    });
    it('element does not has already class',function() {
        let element= {className:''};
        className.addClass(element,'card');
        assert.include(element.className,'card');

    });
    it('test concatenation className',function() {
        let element= {className:''};
        className.addClass(element,'className1');
        className.addClass(element,'className2');
        assert.equal(element.className,'className1 className2 ');

    });

});