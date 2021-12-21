import { createInitialValues, getValidator } from './utils';

describe('Validations', () => {
  it('Required', () => {
    expect(getValidator(true)('a')).toBeUndefined();
    expect(getValidator(true)('')).toBe('Required');
  });

  it('Pattern', () => {
    expect(getValidator(false, '[0-9]')('1')).toBeUndefined();
    expect(getValidator(false, '[0-9]')('a')).toBe('Invalid format');
  });
});

describe('Initial values', () => {
  it('Pattern', () => {
    expect(
      createInitialValues([
        {
          id: 's1',
          title: 'bool',
          content: [{ id: 'bool', type: 'boolean' } as any],
        },
        {
          id: 's2',
          title: 'text',
          content: [{ id: 'text', type: 'text' } as any],
        },
      ]),
    ).toEqual({ s1: { bool: false }, s2: { text: '' } });
  });
});
