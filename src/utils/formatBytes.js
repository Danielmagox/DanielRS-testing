const formatGb = (value) => {
  return `${value}GB`
}

const formatMb = (value) => {
  return `${value}MB`
}

const formatTb = (value) => {
  return `${value}TB`
}

const formatBytes = (megaBytes) => {
  if (megaBytes === 0) {
    return ''
  }

  if (megaBytes >= 1000000) {
    const tb = Math.floor(megaBytes / 1000000)
    const gb = megaBytes % 1000000

    return formatTb(tb) + ' ' + formatBytes(gb)
  }

  if (megaBytes >= 1000) {
    const gb = Math.floor(megaBytes / 1000)
    const mb = megaBytes % 1000

    return formatGb(gb) + ' ' + formatBytes(mb)
  }
  return formatMb(megaBytes)
}

module.exports = formatBytes
