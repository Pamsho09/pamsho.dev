export const convertDate = (dates) => {
  // converter  date to string month day year
  const date = new Date(dates)
  let month
  let day
  const year = date.getFullYear()

  const minimunMont = 10
  if (date.getMonth() + 1 < minimunMont) {
    month = `0${month}`
  }
  if (date.getDate()) {
    day = `0${day}`
  }
  return `${year}-${month}-${day}`
}
