const lib = require('../lib');
const excercise = require('../exercise1');


describe('absolute', () => {
  it('to expect a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  
  it('to expect a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  }); 
  
  it('to expect 0 number if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  }); 
})

describe('greet', () => {
  it('this should return a welcome message', () => {
    const result = lib.greet('Promise');
    expect(result).toContain('Promise');
  })
})

describe('getCurrencies', () => {
  it('this should return currencies', () => {
    const result = lib.getCurrencies(3);
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
    expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
  })
})

describe('getProduct', () => {
  it('should return the product id', () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({id: 1, price: 10});
    expect(result).toHaveProperty('id', 1);
  })
})

describe('registerUser', () => {
  it('should throw if username is false', () => {
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach(a => {
      expect(() => { lib.registerUser(a)}).toThrow();
    })
  });

  it('should return an object if the name is valid', () => {
    const result = lib.registerUser('Promise');
    expect(result).toMatchObject({username: 'Promise'});
    expect(result.id).toBeGreaterThan(0);
  })
})

// Solution for excercise 

describe('fizzBuzz', () => {
  it('It should return a number', () => {
    expect(() => {excercise.fizzBuzz('a')}).toThrow()
  });

  it('if input is divisible by 3 and 5 should return an exception', () => {
    const result = excercise.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('if input is divisible by 3 should return an exception', () => {
    const result = excercise.fizzBuzz(3);
    expect(result).toBe('Fizz');
  });

  it('if input is divisible by 5 should return an exception', () => {
    const result = excercise.fizzBuzz(5);
    expect(result).toBe('Buzz');
  })
})