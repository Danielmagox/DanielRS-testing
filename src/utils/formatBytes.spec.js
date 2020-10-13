const formatBytes = require('./formatBytes')

describe('formatBytes', () => {
  it('works with only MB', () => {
    const result = formatBytes(900)
    expect(result).toEqual('900MB')
  })
  it('works with GB and MB', () => {
    const result = formatBytes(1900)
    expect(result).toEqual('1GB 900MB')
  })
  it('works with GB and MB', () => {
    const result = formatBytes(568200)
    expect(result).toEqual('568GB 200MB')
  })
  it('works with TB GB and MB', () => {
    const result = formatBytes(1234567)
    expect(result).toEqual('1TB 234GB 567MB')
  })
})