function listOfNames(names) {
    return [...names]
    .sort((aName, bName) => aName.localeCompare(bName)) //[`Bob`, `Christina`, `Ema`, `John`]
    .map((name, index) => `${index + 1}.${name}`) // [`1. Bob`, `2. Christina`, `3. Ema`, `4. John`]
    .join('\n');
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));
