// PLEASE DON'T change function name
/* SOLUTION 1: GET STRING AND GET AN OBJECT FROM IT
    module.exports = function makeExchange(currency) {
    
    var coinSet = "", obj = {};

    if (currency == 0) return obj;
    if (currency > 10000) {
            return {error: "You are rich, my friend! We don\'t have so much coinDescription for exchange"};
    } else

        // Amount can be exchanged, calculating:
        // 50¢, 25¢, 10¢, 5¢ and 1¢
        // H, Q, D, N and P.
        var halfsQty, quarterQty, dimeQty, nickelQty, pennieQty;
    
        if (currency >= 50) {
        halfsQty =  parseInt( currency / 50) ;
        // получили кол-во 50x
        currency = (currency % 50);
        // сколько осталось менять
    }
        if (currency >= 25 ) {
        quarterQty = parseInt(currency / 25);
        // получили кол-во 25x
        currency = (currency % 25);
        // сколько осталось менять
        }

        if (currency >= 10) {
            dimeQty = parseInt(currency / 10);
            // получили кол-во 10x
            currency = (currency % 10);
            // сколько осталось менять
        }

        if (currency >= 5) {
            nickelQty =parseInt(currency / 5);
            // получили кол-во 5x
            currency = (currency % 5);
            // сколько осталось менять
        }
        if (currency >= 1) {
    pennieQty = Math.round( (currency) );
    // менять только на пенни
        }   

// парсим строку:

    if (halfsQty > 0) {
        coinSet = coinSet + "\"H\":" + halfsQty;
    }

    if (quarterQty > 0) {
        if (coinSet != "") { // если впереди что-то есть, добавим запятую
            coinSet = coinSet + ",";
        }
        coinSet = coinSet + "\"Q\":" + quarterQty;
    }

    if (dimeQty > 0) {
        if (coinSet != "") { // если впереди что-то есть, добавим запятую
            coinSet = coinSet + ",";
        }
        coinSet = coinSet+ "\"D\":" + dimeQty;
    }

    if (nickelQty > 0) {
        if (coinSet != "") { // если впереди что-то есть, добавим запятую
            coinSet = coinSet + ",";
        }
        coinSet = coinSet  + "\"N\":" + nickelQty;
    }

    if (pennieQty > 0) {
        if (coinSet != "") { // если впереди что-то есть, добавим запятую
            coinSet = coinSet + ",";
        }
        coinSet = coinSet + "\"P\":" + pennieQty;
    }
    coinSet = "{" + coinSet + "}";
    obj = JSON.parse(coinSet);
    return obj;
}
*/

// SOLUTION 2: WITH OBJECT DIRECTLY

module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
    }
    var outObj = {}, coinDescription = {H: 50, Q: 25, D: 10, N: 5, P: 1};
    for (var nominal in coinDescription) {
        var value = coinDescription[nominal];
        if (currency >= value) {
            outObj[nominal] = Math.floor(currency / value);
            currency = currency - outObj[nominal] * value;
        }
    }
    return outObj;
}