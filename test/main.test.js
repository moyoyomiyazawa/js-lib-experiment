const myOriginalLibrary = require('../src/index.js');

describe('myOriginalLibrary()', () => {
  test('emojiを引数にセットできる', async () => {
    const response = myOriginalLibrary('🎉');
    expect(response).toBe('OK');
  });
  test('emoji以外が引数にセットされた場合、例外を投げる', () => {
    expect(() => myOriginalLibrary('')).toThrow();
    expect(() => myOriginalLibrary('test')).toThrow();
    expect(() => myOriginalLibrary(123)).toThrow();
    expect(() => myOriginalLibrary(null)).toThrow();
    expect(() => myOriginalLibrary()).toThrow();
    expect(() => myOriginalLibrary([])).toThrow();
    expect(() => myOriginalLibrary({})).toThrow();
  });
});
