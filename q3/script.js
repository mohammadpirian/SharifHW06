let listMember = [
    {
      name: "mohammad",
      age: 25,
    },
    {
      name: "ali",
      age: 26,
    },
    {
      name: "ahmad",
      age: 71,
    },
    {
      name: "reza",
      age: 12,
    },
    {
      name: "mohtashami",
      age: 2,
    },
    {
      name: "ehsan",
      age: 69,
    },
    {
      name: "saeed",
      age: 40,
    },
  ];
  function sortAge() {
    return listMember.sort((a, b) => a.age - b.age);
  }
  
  console.log(sortAge());