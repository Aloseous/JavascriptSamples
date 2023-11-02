const inputString = "januaryjanuarymondaywednesdayfebruarythursdaydecember";
const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const foundMonthNames = monthNames.reduce((acc, month) => {
    let currentInd = 0;
    while (currentInd !== -1) {
        console.log('currentInd -->',currentInd)
        currentInd = inputString.indexOf(month, currentInd);
        console.log('currentInd ------------- -->',currentInd)
        if (currentInd !== -1) {
            acc.push(month);
            currentInd += month.length;
        }
    }
    return acc;
}, []);

console.log("Month Names", foundMonthNames);
console.log("Total Months:", foundMonthNames.length);



// iven: "Hello World"
// Create a function to transform the input into camelcase (every space, next letter should be capital)

const camelCaseStr= "I can and i am smart";
const convertList  = () => {
    const toArrList = Array.from(camelCaseStr);
    const convertData = [];
    for(let i in toArrList){
        if(toArrList[i- 1] === " "){
            const upperCaseletter = toArrList[i].toUpperCase();
            convertData.push(upperCaseletter)
        }else{
            convertData.push(toArrList[i])
        }
    }
    return convertData.join("")
}

const convertedData = convertList(camelCaseStr)
console.log("To Camel case =>",convertedData)



// Given: [1, 2, 3, 4, 5] and [2, 4, 6, 8, 10]
// Question: Find the same numbers in those two arrays?
const compare1 = [1, 2, 3, 4, 5]
const compare2 = [2, 4, 6, 8, 10]

const filterdList = compare1.filter(item => compare2.includes(item))

console.log("Matched data: ",filterdList)