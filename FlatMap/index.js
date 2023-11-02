const nestedArray = [[1, 2], [3, 4], [5, 6,[8,9]]];
const flattenedArray = nestedArray.flatMap((innerArray) => innerArray);

console.log('flattenedArray -->',flattenedArray)