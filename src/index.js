let units = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', };
let under20 = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', };
let dozens = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety', };

module.exports = function toReadable(n) {
    // Если только цифра
    if (n < 10) {
        return units[n];
    }
    // Если от 10 до 19 включительно
    if (n >= 10 && n < 20) {
        return under20[n];
    }

    let numbers = [],
        tmp = n,
        res = '';
    // Разбиваем на [2] сотни, [1] десятки, [0] единицы
    while (tmp) {
        numbers.push(tmp % 10);
        tmp = Math.floor(tmp / 10);
    }
    // Если меньше 100, но больше 19
    if (n < 100) {
        res += dozens[numbers[1]];
    }
    // Если больше 100
    if (n > 99) {
        res += units[numbers[2]] + ' hundred';
        if (numbers[1] == 1) {
            res += ' ' + under20[numbers[1] * 10 + numbers[0]];
        } else if (numbers[1] != 0) {
            res += ' ' + dozens[numbers[1]];
        }
    }
    // Если присутствуют единицы
    if (numbers[0] != 0 && numbers[1] != 1) {
        res += ' ' + units[numbers[0]];
    }


    return res;
}
