import wrappedGetSymbolLimitedText from './function';

describe('wrappedGetSymbolLimitedText', () => {
  it('should return the text as is if its length is less than the limit', () => {
    const text = 'Hello';
    const limit = 10;
    const result = wrappedGetSymbolLimitedText(text, limit);
    expect(result).toBe(text);
  });

  it('should return truncated text with ellipsis if its length is greater than the limit', () => {
    const text = 'Hello, World!';
    const limit = 10;
    const result = wrappedGetSymbolLimitedText(text, limit);
    expect(result).toBe('Hello, ...');
  });

  it('should return an empty string if the input is not a valid string', () => {
    const text = 12345;
    const limit = 10;
    const result = wrappedGetSymbolLimitedText(text, limit);
    expect(result).toBe('');
  });

  it('should handle undefined text input gracefully', () => {
    const text = undefined;
    const limit = 10;
    const result = wrappedGetSymbolLimitedText(text, limit);
    expect(result).toBe('');
  });
});
