
const assert =require ('chai').assert;

describe('TrueEqualTrue', () => {
    it('True', () => {
        const wrapper = true;
        assert.equal(true,wrapper);
    });
});