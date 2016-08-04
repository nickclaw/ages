# ages

Your terrible time estimator.

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
