'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(alarmTime, funk, id) {
        if (!id) {
            throw new Error('Не задан параметр ID');
        }

        if (this.alarmCollection.find(item => item.id === id)) {
            return console.error('данный параметр id был занят ранее');
        }

        const newObject = {
            alarmTime,
            funk,
            id,
        };

        return this.alarmCollection.push(newObject);
    }

    removeClock(id) {
        let result = this.alarmCollection.findIndex(item => item.id === id);
        if (result + 1) {
            this.alarmCollection.splice(result, 1);
        }
        return Boolean(result);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        let currentHours = currentDate.getHours();
        let currentMinutes = currentDate.getMinutes();
        if (currentHours < 10) {
            currentHours = '0' + currentHours;
        }
        if (currentMinutes < 10) {
            currentMinutes = '0' + currentMinutes;
        }
        return `${currentHours}:${currentMinutes}`;
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => this.checkClock(item)));
        }
    }


    checkClock(ring) {
        if (ring.alarmTime === this.getCurrentFormattedTime()) {
            ring.funk();
        }
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        console.log(`Печать всех будильников в колличестве ${this.alarmCollection.length}`)
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.alarmTime}`));
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}