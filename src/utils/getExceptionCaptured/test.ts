import getExceptionCaptured from './function';

global.console = {
  ...global.console,
  warn: jest.fn(),
};

jest.mock('../../constants', () => ({
  exceptionList: {
    InvalidParam: 'Invalid parameter',
    UnavailableModule: 'Unavailable module',
  },
  isDevelopmentEnvironment: true,
}));

describe('getExceptionCaptured', () => {
  it('should log the exception as a warning in development environment', () => {
    const context = {name: 'testFunction'};
    const exception = 'InvalidParam';

    getExceptionCaptured(context, exception);

    expect(console.warn).toHaveBeenCalledWith('Exception Captured: ', {
      place: context.name,
      exception,
    });
  });
});
