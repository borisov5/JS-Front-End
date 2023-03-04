function formatGrades(grade) {
    if (grade >= 5.50) {
        return `Excellent (${formatToSecondDecimal(grade)})`;
    }   else if (grade < 5.50 && grade >= 4.5) {
        return `Very good (${formatToSecondDecimal(grade)})`;
    }   else if (grade < 4.5 && grade >= 3.5) {
        return `Good (${formatToSecondDecimal(grade)})`;
    }   else if (grade < 3.5 && grade >= 3) {
        return `Poor (${formatToSecondDecimal(grade)})`;
    }

    return `Fail (2)`

    function formatToSecondDecimal(g) {
        return g.toFixed(2);
    }
}

console.log(formatGrades(3.33))