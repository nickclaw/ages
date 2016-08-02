'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.year = exports.month = exports.week = exports.day = exports.hour = exports.minute = undefined;

var _lodash = require('lodash.floor');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var minute = exports.minute = 1000 * 60;
var hour = exports.hour = minute * 60;
var day = exports.day = hour * 24;
var week = exports.week = day * 7;
var month = exports.month = day * 30; // meh
var year = exports.year = day * 365; // pretty good
var max = year * 10;

/**
 * Basic date casting
 * @param {String|Date} date
 * @return {Date}
 */
function toDate(date) {
  return date instanceof Date ? date : new Date(val);
}

/**
 * Generate a short string representation time in ms
 * @param {Number} ms - positive value in ms
 * @return {String}
 */
function diffToString(ms) {
  if (ms < minute) {
    return '1m';
  }if (ms < hour) {
    return (0, _lodash2.default)(ms / minute) + 'm';
  } else if (ms < day) {
    return (0, _lodash2.default)(ms / hour) + 'h';
  } else if (ms < week) {
    return (0, _lodash2.default)(ms / day) + 'd';
  } else if (ms < month) {
    return (0, _lodash2.default)(ms / week) + 'w';
  } else if (ms < year) {
    return (0, _lodash2.default)(ms / month) + 'M';
  } else if (ms < max) {
    return (0, _lodash2.default)(ms / year) + 'y';
  } else {
    return '';
  }
}

exports.default = {
  ago: function ago(val) {
    var date = toDate(val);
    var now = new Date();
    var diff = now - date;

    return diff >= 0 ? diffToString(diff) : '-' + diffToString(-diff);
  },
  until: function until(val) {
    var date = toDate(val);
    var now = new Date();
    var diff = date - now;

    return diff >= 0 ? diffToString(diff) : '-' + diffToString(-diff);
  }
};