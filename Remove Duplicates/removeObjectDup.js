const members = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 1, name: "Johnny" },
    { id: 4, name: "Alice" }
  ];


const unique = [...new Map(members.map(item => [item.id, item])).values()]

console.log('unique --->',unique)
