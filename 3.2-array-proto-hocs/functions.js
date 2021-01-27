'use strict'

//задача 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(item => item.name);
}

function getCountReliableWeapons(value) {
    return weapons.filter(item => item.initDurability > value).length;
}

function hasReliableWeapons(value) {
    return !!weapons.find(item => item.initDurability > value);
}

function getReliableWeaponsNames(value) {
    return weapons.filter(item => item.initDurability > value).map(item => item.name);
}

function getTotalDamage() {
    return weapons.map(item => item.attack).reduce((sum, current) => sum + current, 0);
}

function getValuestCountToSumValues(numberArray, currentSum) {
    let count = 0;
    return numberArray.filter(item => !((count += item) < currentSum)).length;
}

// задача 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // sleep(100);
    return args.reduce((sum, arg) => sum + arg, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.every(item => item === arr2[arr1.indexOf(item)]) && arr2.every(item => item === arr1[arr2.indexOf(item)]);
}

function memorize(fn, limit) {
    const memory = [];

    return function (...args) {

        if (memory.length > limit) {
            memory.shift();
        }

        let checkingObject = memory.find(item => compareArrays(item.args, [...args]));

        if (checkingObject) {
            return checkingObject.result;
        }


        let value = fn(...args);

        memory.push({
            args: [...args],
            result: value,
        });

        return value;
    };
}

// задача 3

function testCase(testFunction) {
    const testArray = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
    const string = 'счетчик';
    console.time(string);
    for (let i = 0; i < 100; i++) {
        testArray.forEach(item => testFunction(...item));
    }
    console.timeEnd(string);
}