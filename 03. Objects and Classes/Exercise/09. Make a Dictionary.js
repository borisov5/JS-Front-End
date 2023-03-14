function makeDictionary(inputArr) {

    // Merge all dictionaries into one
    const resultObj = {};
    for (const jsonStr of inputArr) {
        const dictObj = JSON.parse(jsonStr);
        Object.assign(resultObj, dictObj);
    }

    // Sort the resulting dictionary by the keys and print each term and its definition
    Object.keys(resultObj).sort().forEach(term => {
        const definition = resultObj[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    });
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )