import getFunctionTryCatchWrapped from './function';

jest.mock('@sentry/react-native');

describe('getFunctionTryCatchWrapped', () => {
  it('wrapped function should return the same result as unwrapped in development environment', () => {
    const func = (a: string, b: string) => {
      return a + b;
    };
    const unwrappedFunctionResult = func('arg1', 'arg2');
    const wrappedFunc = getFunctionTryCatchWrapped(func);
    const wrappedFunctionResult = wrappedFunc('arg1', 'arg2');
    expect(wrappedFunctionResult).toBe(unwrappedFunctionResult);
  });

  it('wrapped function should return the same result as unwrapped in production environment', () => {
    jest.mock('../../constants', () => ({
      isDevelopmentEnvironment: false,
    }));
    const func = (a: string, b: string) => {
      return a + b;
    };
    const unwrappedFunctionResult = func('arg1', 'arg2');
    const wrappedFunc = getFunctionTryCatchWrapped(func);
    const wrappedFunctionResult = wrappedFunc('arg1', 'arg2');
    expect(wrappedFunctionResult).toBe(unwrappedFunctionResult);
  });
});
