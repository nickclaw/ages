# ages

Your terrible time estimator.

### Example
```js
ages.until(weekFromNow); // 1w

ages.until(now); // 1m

ages.until(inAThousandYears); // ?

ages.ago(tuesday, thursday); // 2d

ages.ago(nextWeek, today); //-1w

ages.ago(theNineties); // ? (im so old)

// customize formatting
// live life dangerously
ages.ago(a, b, {
  minute: 'years',
  hour: 'minutes',
  day: 'week',
  week: 'years',
  month: '?',
  year: 'month',
  fallback: 'seconds'
});
```

### API

#### `ages.ago(target[, fromDate[, formats]]) -> String`
Returns an estimate of how long ago a given date was.

Takes the following arguments:
 * `target` Date|String|Number - the target date
 * `fromDate` Date|String|Number - the start date (defaults to now)
 * `formats` Object - customize formatting of different units

#### `ages.until(target[, fromDate[, formats]]) -> String`
Returns an estimate of how long until given a date is.

Takes the following arguments:
 * `target` Date|String|Number - the target date
 * `fromDate` Date|String|Number - the start date (defaults to now)
 * `formats` Object - customize formatting of different units

#### `ages.msToString(ms[, formats]) -> String`
Returns a rough estimation of the milliseconds given.

Takes the following arguments:
 * `ms` Number - positive time in milliseconds
 * `formats` Object - customize formatting of different units
