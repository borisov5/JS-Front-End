function solve (typeOfDay, age) {
    let result;
    if (typeOfDay==='Weekday' && age <= 18 && age >= 0){
        result = '12$';
    }
    else if (typeOfDay==='Weekday' && age > 18 && age <= 64) {
        result = '18$';
    }
    else if (typeOfDay==='Weekday' && age > 64 && age <= 122) {
        result = '12$';
    }
    else if (typeOfDay==='Weekend' && age <= 18 && age >= 0){
        result = '15$';
    }
    else if (typeOfDay==='Weekend' && age > 18 && age <= 64) {
        result = '20$';
    }
    else if (typeOfDay==='Weekend' && age > 64 && age <= 122) {
        result = '15$';
    }
    else if (typeOfDay==='Holiday' && age <= 18 && age >= 0){
        result = '5$';
    }
    else if (typeOfDay==='Holiday' && age > 18 && age <= 64) {
        result = '12$';
    }
    else if (typeOfDay==='Holiday' && age > 64 && age <= 122) {
        result = '10$';
    }
    else {
        result = 'Error!';
    }
    console.log(result);
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);
