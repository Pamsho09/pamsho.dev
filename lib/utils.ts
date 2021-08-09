export const convertDate = (dates) => {
  // converter  date to string month day year
  const date = new Date(dates)
  let month
  let day
  const year = date.getFullYear()

  const minimunMont = 10
  if (date.getMonth() < minimunMont) {
    month = `0${date.getMonth()}`
  }
  if (date.getDay()) {
    day = `0${date.getDay()}`
  }
  return `${year}-${month}-${day}`
}
