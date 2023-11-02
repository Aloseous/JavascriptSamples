const shark = {
  species: "great white",
  color: "white",
  numberOfTeeth: Infinity
};

for (const attribute in shark) {
  console.log(shark[attribute]);
}