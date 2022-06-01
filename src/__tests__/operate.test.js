import operate from "../logic/operate";

describe('testing operate function', () => {
    test('3 + 5 equal 8', () => {
    expect(operate(3, 5, '+')).toBe('8');
    });
    test('1 * 7 egual 7', () => {
        expect(operate(1, 7, 'x')).toBe('7')
    })
})
