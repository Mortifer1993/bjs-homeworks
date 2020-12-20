'use strict'

function getResult(a, b, c){
    let x= [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if ( discriminant === 0) {
        x.push( (-b + Math.sqrt(discriminant)) / (2 * a));
    } else if (discriminant > 0) {
        x.push( (-b + Math.sqrt(discriminant)) / (2 * a));
        x.push( (-b - Math.sqrt(discriminant)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    if ( marks.length > 0) {
        if ( marks.length > 5) {
            console.log('Колличество оценок превышает значение 5.\nДля подсчета средней оценки будут взяты первые 5 значений,\nостальные будут отброшены.');
        }
        marks = marks.slice(0, 5);
        let value = 0
        for (let i = 0; i < marks.length; i++){
            value += marks[i]
        }
        return value / marks.length;
    }
    return 0;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}