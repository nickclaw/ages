# ages

Your terrible time estimator.

### API

#### `ages.ago(target[, fromDate]) -> String`
Returns an estimate of how long ago a given date was.

Takes the following arguments:
 * `target` Date|String|Number - the target date
 * `fromDate` Date|String|Number - the start date (defaults to now)

#### `ages.until(target[, fromDate]) -> String`
Returns an estimate of how long until given a date is.

Takes the following arguments:
 * `target` Date|String|Number - the target date
 * `fromDate` Date|String|Number - the start date (defaults to now)

#### `ages.msToString(ms) -> String`
Returns a rough estimation of the milliseconds given.
