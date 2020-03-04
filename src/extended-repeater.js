module.exports = function repeater(str, options) {

    let result = '';

    options.separator === undefined ? options.separator = '+' : options.separator;
    options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator;
    options.repeatTimes === undefined ? options.repeatTimes = 1 : options.repeatTimes;
    options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
    options.addition === undefined ? options.additionRepeatTimes = '' : options.addition

    for (i = 0; i < options.repeatTimes; i++) {
        result += str;

        for (j = 0; j < options.additionRepeatTimes; j++) {
            result += options.addition;

            if (j < options.additionRepeatTimes - 1) {
                result += options.additionSeparator;
            }
        }

        if (i < options.repeatTimes - 1) {
            result += options.separator;
        }
    }

    return result;
}