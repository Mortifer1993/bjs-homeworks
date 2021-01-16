'use strict'

function parseCount(value) {
    const valueParse = parseInt(value);
    if (isNaN(valueParse)){
        throw new Error('Невалидное значение');
    }
    return valueParse;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}