import floor from 'lodash.floor';

export const minute = 1000 * 60;
export const hour = minute * 60;
export const day = hour * 24;
export const week = day * 7;
export const month = day * 30; // meh
export const year = day * 365; // pretty good
const max = year * 10;

const defaultFormats = {
  minute: 'm',
  hour: 'h',
  day: 'd',
  week: 'w',
  month: 'M',
  year: 'Y',
  fallback: '?',
};

/**
 * Basic date casting
 * @param {String|Date} date
 * @return {Date}
 */
function toDate(date) {
  return date instanceof Date
    ? date : new Date(date);
}


const ages = {
  ago(_target, _fromDate = new Date(), formats = defaultFormats) {
    const target = toDate(_target);
    const fromDate = toDate(_fromDate);
    const diff = fromDate - target;

    return diff >= 0
      ? ages.msToString(diff)
      : '-' + ages.msToString(-diff);
  },

  until(_target, _fromDate = new Date(), formats = defaultFormats) {
    const target = toDate(_target);
    const fromDate = toDate(_fromDate);
    const diff = target - fromDate;

    return diff >= 0
      ? ages.msToString(diff)
      : '-' + ages.msToString(-diff);
  }

  msToString(ms, formats = defaultFormats) {
    if (ms < minute) {
      return '1' + formats.minute;
    } if (ms < hour) {
      return floor(ms / minute) + formats.minute;
    } else if (ms < day) {
      return floor(ms / hour) + formats.hour;
    } else if (ms < week) {
      return floor(ms / day) + formats.day;
    } else if (ms < month) {
      return floor(ms / week) + formats.week;
    } else if (ms < year) {
      return floor(ms / month) + formats.month;
    } else if (ms < max) {
      return floor(ms / year) + formats.year;
    } else {
      return formats.fallback;
    }
  }
};

export default ages;
