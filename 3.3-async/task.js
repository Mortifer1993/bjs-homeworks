'use strict'

class AlarmClock {
    constructor () {
        this.alarmConstructor = [];
        this.timerId;
    }

    addClock(alarmTime, fn, id) {

        if (id === undefined) {
            throw new Error('Не задан параметр ID');
        }

        if (this.alarmConstructor.find(item => item.id === id)) {
            return console.error('данный параметр id был занят ранее');
        } else {
            let newObject = {
                alarmTime,
                fn,
                id,
            };
            return this.alarmConstructor.push(newObject);
        }
    }

    removeClock(id) {
        let result = this.alarmConstructor.filter(item => item.id === id);
        let numberId = this.alarmConstructor.find(item => item.id === id);
        this.alarmConstructor.splice(numberId, 1);
        return  result;
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    }

    start() {
        return this.timerId = setInterval(checkClock(), 1000);
    }

    checkClock() {
        let currentTime = getCurrentFormattedTime();
        if (this.alarmConstructor.filter(item => item.alarmTime === currentTime)) {
            return 
        }
    }
}