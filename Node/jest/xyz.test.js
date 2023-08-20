function sum (a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('concatinates ', () => {
    expect(sum("hello", "world")).toBe("helloworld");
})