'use strict'

//Задание 1

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

// Задание 2

class Triangle {
    constructor(a, b, c) {
        if( a + b < c || b + c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const space = Math.round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 1000) / 1000;
        return space;
    }
}

function getTriangle(a, b, c) {
    try {
        let newTiangle = new Triangle(a, b, c);
        return newTiangle;
    } catch (error) {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}