const members = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "Johnny" },
  { id: 4, name: "John" }
];


const unique = [...new Map(members.map(item => [item.name, item])).values()]

console.log(unique)