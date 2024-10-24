const oneMinute = 1000 * 60; // 一The millise times of minutes
const oneHour = oneMinute * 60; // 一Hours of millise times
const oneDay = oneHour * 24; // 一Day's milliseconds
const oneWeek = oneDay * 7; // 一Number of millise times on week
const oneMonth = oneDay * 30; // 一Number of millise times a month

/**
 * Decrease by day
 *
 * @param days A few days to reduce
 */
Date.prototype.minusDays = function (days) {
    return this.minusMillis(oneDay * days);
};

/**
 * Increase by day
 *
 * @param days The number of days to be increased
 */
Date.prototype.plusDays = function (days) {
    return this.plusMillis(oneDay * days);
};

/**
 * Reduced
 *
 * @param hours The number of hours to be reduced
 */
Date.prototype.minusHours = function (hours) {
    return this.minusMillis(oneHour * hours);
};

/**
 * Increase
 *
 * @param hours Increase the number of hours
 */
Date.prototype.plusHours = function (hours) {
    return this.plusMillis(oneHour * hours);
};

/**
 * Decrease by minute
 *
 * @param minutes The number of minutes to be reduced
 */
Date.prototype.minusMinutes = function (minutes) {
    return this.minusMillis(oneMinute * minutes);
};

/**
 * Increase
 *
 * @param minutes The number of minutes to be increased
 */
Date.prototype.plusMinutes = function (minutes) {
    return this.plusMillis(oneMinute * minutes);
};

/**
 * Decrease by millisecond
 *
 * @param millis Number of milliligues to be reduced
 */
Date.prototype.minusMillis = function(millis) {
    let time = this.getTime() - millis;
    let newDate = new Date();
    newDate.setTime(time);
    return newDate;
};

/**
 * Add in milliseconds
 *
 * @param millis To increase the millimeter number
 */
Date.prototype.plusMillis = function(millis) {
    let time = this.getTime() + millis;
    let newDate = new Date();
    newDate.setTime(time);
    return newDate;
};

/**
 * Setting time is the day 00:00:00.000
 */
Date.prototype.setMinTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

/**
 * Setting time is the day 23:59:59.999
 */
Date.prototype.setMaxTime = function () {
    this.setHours(23);
    this.setMinutes(59);
    this.setSeconds(59);
    this.setMilliseconds(999);
    return this;
};

/**
 * Formatting date
 */
Date.prototype.formatDate = function () {
    return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate());
};

/**
 * Formatting time
 */
Date.prototype.formatTime = function () {
    return addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
};

/**
 * Formatting date plus time
 *
 * @param split Division between date and time, the default is a space
 */
Date.prototype.formatDateTime = function (split = ' ') {
    return this.formatDate() + split + this.formatTime();
};

class DateUtil {
    // String string to date object
    static parseDate(str) {
        return new Date(str.replace(/-/g, '/'));
    }

    static formatMillis(millis) {
        return moment(millis).format('YYYY-M-D H:m:s');
    }

    static firstDayOfMonth() {
        const date = new Date();
        date.setDate(1);
        date.setMinTime();
        return date;
    }
}
