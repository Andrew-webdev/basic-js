module.exports = function getSeason(date) {

  if (typeof date == 'undefined') {
    return 'Unable to determine the time of year!'
  }

  if (date.getTime() == undefined) {
    throw new Error()
  }

  let month = date.getMonth()

  if (month == 11 || month < 2) {
    return 'winter'

  } else if (month == 2 || month < 5) {
    return 'spring'

  } else if (month == 5 || month < 8) {
    return 'summer'

  } else return 'autumn'
}