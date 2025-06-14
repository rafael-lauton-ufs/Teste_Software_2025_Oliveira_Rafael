import { throwBasedOnInput, CustomError, AnotherError } from './errorThrower';

describe('throwBasedOnInput', () => {
  test('should throw CustomError for "custom" input', () => {
    const func = () => throwBasedOnInput('custom');
  
    expect(func).toThrow(CustomError);

    expect(func).toThrow('This is a custom error');
  });

  test('should throw AnotherError for "another" input', () => {
    const func = () => throwBasedOnInput('another');
    
    expect(func).toThrow(AnotherError);
    expect(func).toThrow('This is another error');
  });

  test('should throw generic Error for unknown input', () => {
    try {
      throwBasedOnInput('unknown');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err).not.toBeInstanceOf(CustomError);
      expect(err).not.toBeInstanceOf(AnotherError);
      expect(err).toHaveProperty('message', 'Generic error');
    }
  });
});