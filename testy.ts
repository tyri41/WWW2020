import {fib} from './scripts/main';
import {expect} from 'chai';
import 'mocha';

describe('fibonacci', () => {
    it('should equal 0 for call with 0', () => {
        expect(fib(0)).to.equal(0);
    });
    it('should equal 3 for call with 4', () => {
        expect(fib(4)).to.equal(3);
    });
});