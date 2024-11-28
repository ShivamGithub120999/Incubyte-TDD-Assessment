import { expect } from 'chai';
import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
    let calculator: StringCalculator

    beforeEach(() => {
        calculator = new StringCalculator();
    })

    it('should return 0 for an empty string', () => {
        expect(calculator.add('')).to.equal(0);
    })
})