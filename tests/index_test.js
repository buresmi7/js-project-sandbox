
const assert = require('assert');
const index = require('./../app/index');

describe('Index doIt', () => {
    it('should concat number and string', () => {
        assert.equal(
            index.doIt(10, 'text'),
            '10text');
    });
});
