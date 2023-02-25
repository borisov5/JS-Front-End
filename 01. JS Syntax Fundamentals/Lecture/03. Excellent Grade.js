function solve(num) {
    grade = Number(num)
    if (grade>=5.50) {
        console.log("Excellent");
    }
    else{
        console.log(`Not excellent`)
    }
}

solve(3);
solve(5.75);
solve(4.70);