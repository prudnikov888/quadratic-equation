module.exports = function solveEquation(equation) {

    let modifiedEquation = equation.replace(/[ ']/g, '');

    const firstAsterixIndex = modifiedEquation.indexOf('*', 0);
    const secondAsterixIndex = modifiedEquation.indexOf('*', firstAsterixIndex + 1);
    const powerIndex = modifiedEquation.indexOf('^', 0);

    const a = modifiedEquation.substring(0, firstAsterixIndex);
    const b = modifiedEquation.substring(powerIndex + 2, secondAsterixIndex);
    const c = modifiedEquation.substring(secondAsterixIndex + 2, modifiedEquation.length + 1);

    const discriminant = b * b - 4 * a * c;
    const dSquare = Math.sqrt(discriminant);
    const firstRoot = (-b - dSquare) / (2 * a);
    const secondRoot = (-b + dSquare) / (2 * a);

    let resultArray = [];
    resultArray.push(Math.round(firstRoot));
    resultArray.push(Math.round(secondRoot));
    resultArray.sort((left, right) => {
        return left - right;
    });

    return resultArray;
};



