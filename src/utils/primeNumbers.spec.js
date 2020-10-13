const primeNumbers = require('./primeNumbers')

describe('primeNumber', () => {
  it('0 is not prime', () => {
    const result = primeNumbers(0)
    expect(result).toEqual(false)
  })
  it('1 is not prime', () => {
    const result = primeNumbers(1)
    expect(result).toEqual(false)
  })
  it('2 is prime', () => {
    const result = primeNumbers(2)
    expect(result).toEqual(true)
  })
  it('73 is prime', () => {
    const result = primeNumbers(73)
    expect(result).toEqual(true)
  })
  it('75 is not prime', () => {
    const result = primeNumbers(75)
    expect(result).toEqual(false)
  })
  it('-1 is not prime', () => {
    const result = primeNumbers(-1)
    expect(result).toEqual(false)
  })
  it('155 is not prime', () => {
    const result = primeNumbers(155)
    expect(result).toEqual(false)
  })
  it('5099 is prime', () => {
    const result = primeNumbers(5099)
    expect(result).toEqual(true)
  })
  it('1529487319  is prime', () => {
    const result = primeNumbers(1529487319 )
    expect(result).toEqual(true)
  })
})