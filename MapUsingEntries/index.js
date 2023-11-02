const contryObj = {
  BRA: 9,
  IDN: 35,
  CHN: 54,
  POL: 11,
  THA: 6,
  PHL: 16,
  JOR: 2,
  GRC: 3,
  PRT: 8,
  USA: 6,
  NAM: 1,
  ECU: 1,
  IRN: 2,
  JPN: 7,
  RUS: 24
}

const keyValue = Object.entries(contryObj).map(([country, count] )=> {
return {id:country, value:count}
})

console.log('keyValue -->', keyValue)