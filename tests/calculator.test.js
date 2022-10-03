const {sumar} = require('../operations');

test("Sumando integer (1) más integer (2): ", ()=>{
    expect(sumar(1,2)).toBe(3);
});

test("Sumando real(1.5) y real(2.5):", ()=>{
    expect(sumar(1.5, 2.5)).toBe(4);
})