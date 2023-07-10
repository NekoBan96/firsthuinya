const morning = require('./morning');
const evening = require('./evening');
const afternoon = require('./afternoon');


module.exports = {
    getMorningMessage: function () {
        return morning;
    },
    getEveningMessage: function () {
        return evening;
    },
    getAfternoonMessage: function () {
        return afternoon;
    }
};