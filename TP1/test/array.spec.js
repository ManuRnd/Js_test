let assert = require('chai').assert;

describe('Array', function() {
    it('should be empty',function() {
        let tab = [];
        assert.lengthOf(tab,0);
    });
    it('should be not empty',function () {
        let tab = [];
        assert.isNotOk(tab.length,1);
    });
});