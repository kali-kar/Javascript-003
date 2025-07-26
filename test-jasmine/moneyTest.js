import {formatCurrency} from '../scripts/utils/money.js';

describe('test suit: formatCurrency', () => {
    it('converts cents into rupees',() => {
        expect(formatCurrency(2095)).toEqual('488.05');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00')
    });

    it('rounds to the nearest rupees',() => {
        expect(formatCurrency(2000.5)).toEqual('466.15');
    })
});