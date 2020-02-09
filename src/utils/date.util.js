const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;

const formatToDHMS = (ms) => {
  let msLeft = ms;
  const days = Math.floor(msLeft / msInDay);
  msLeft -= days * msInDay;
  const hours = Math.floor(msLeft / msInHour);
  msLeft -= hours * msInHour;
  const minutes = Math.floor(msLeft / msInMinute);
  msLeft -= minutes * msInMinute;
  const seconds = Math.floor(msLeft / msInSecond);
  msLeft -= seconds * msInSecond;

  return {
    days,
    hours,
    minutes,
    seconds,
    // milliseconds: msLeft,
  };
};

const getDifferenceBetweenDates = (date1, date2 = new Date()) => Math.abs(+new Date(date1) - +new Date(date2));

const dateUtil = {
  formatToDHMS,
  getDifferenceBetweenDates,
};

export default dateUtil;
