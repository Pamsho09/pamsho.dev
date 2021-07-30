export const convertDate = (dates) => {
  //converter  date to string month day year
  let date = new Date(dates);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day;
};
