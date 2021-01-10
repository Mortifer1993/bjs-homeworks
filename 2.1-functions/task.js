'use strict'

function getSolutions(a, b, c){
    let D = Math.pow(b, 2) - 4 * a * c;
     if (D < 0) {
         return {
             D: D,
             roots: [],
         }
     } else if ( D === 0 ){
         let x1 = -b / 2 * a;
         return {
            D: D,
            roots: [x1],
         }
     } else {
         let x1 = (-b + Math.sqrt(D)) / 2 * a;
         let x2 = (-b - Math.sqrt(D)) / 2 * a;
         return {
            D: D,
            roots: [x1, x2],
         }
     }
}

function showSolutionMessage(a, b, c){
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0){
        console.log(`Уравнение не имеет вещественных корней`);
    } else if(result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

function getAverageScore(data){
    let average = 0;
    let counter = 0;
    for(let prop in data){
        data[prop] = getAverageMark(data[prop]);
        average += data[prop];
        counter++;
    }
    data.average = average / counter || 0 ;
    return data;
}

function getAverageMark(marks){
    return marks.reduce((sum, current) => sum + current, 0) / marks.length || 0;
}