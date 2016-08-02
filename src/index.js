import floor from 'lodash.floor';

export const minute = 1000 * 60;
export const hour = minute * 60;
export const day = hour * 24;
export const week = day * 7;
export const month = day * 30; // meh
export const year = day * 365; // pretty good
const max = year * 10;

/**
 * Basic date casting
 * @param {String|Date} date
 * @return {Date}
 */
function toDate(date) {
  return date instanceof Date
    ? date : new Date(date);
}

/**
 * Generate a short string representation time in ms
 * @param {Number} ms - positive value in ms
 * @return {String}
 */
function diffToString(ms) {
  if (ms < minute) {
    return '1m';
  } if (ms < hour) {
    return floor(ms / minute) + 'm';
  } else if (ms < day) {
    return floor(ms / hour) + 'h';
  } else if (ms < week) {
    return floor(ms / day) + 'd';
  } else if (ms < month) {
    return floor(ms / week) + 'w';
  } else if (ms < year) {
    return floor(ms / month) + 'M';
  } else if (ms < max) {
    return floor(ms / year) + 'y';
  } else {
    return '';
  }
}

export default {
  ago(val, now = new Date()) {
    const date = toDate(val);
    const diff = now - date;

    return diff >= 0
      ? diffToString(diff)
      : '-' + diffToString(-diff);
  },

  until(val, now = new Date()) {
    const date = toDate(val);
    const diff = date - now;

    return diff >= 0
      ? diffToString(diff)
      : '-' + diffToString(-diff);
  }
};
