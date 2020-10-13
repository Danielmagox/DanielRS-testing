const moneyFormat = require('./moneyFormat')

describe('moneyFormat', () => {
  it('works with two decimals', () => {
    const result = moneyFormat(19.99)
    expect(result).toEqual('$19.99')
  })
  it('works with 3 integers', () => {
    const result = moneyFormat(250.00)
    expect(result).toEqual('$250.00')
  })
  it('works with two decimals', () => {
    const result = moneyFormat(9500.95)
    expect(result).toEqual('$9,500.95')
  })
})
