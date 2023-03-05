import currency from 'currency.js'
import dayjs from 'dayjs'

const numberToString = (value) => {
  return currency(String(value), { separator: ' ', symbol: '', precision: 0 }).format()
}

const toDate = (value) => {
  return dayjs(value).format('DD/MM/YYYY')
}

const toDateTime = (value) => {
  return dayjs(value).format('DD/MM/YYYY[ a ]HH:mm')
}


const formatPhoneNumber = (phoneNumber, countryCode = null) => {
  let result = phoneNumber.replace('+', '')
  result = result.replace(' ', '')
  if (countryCode && !result.startsWith(countryCode)) {
    result = `${countryCode}${result}`
  }

  return result
}

export default {
  numberToString,
  toDate,
  toDateTime,
  formatPhoneNumber
}
