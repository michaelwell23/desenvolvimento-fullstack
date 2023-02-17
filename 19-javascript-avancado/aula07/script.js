const users = [
  {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    maidenName: 'Smitham',
    age: 50,
    gender: 'male',
    email: 'atuny0@sohu.com',
  },
  {
    id: 2,
    firstName: 'Sheldon',
    lastName: 'Quigley',
    maidenName: 'Cole',
    age: 28,
    gender: 'male',
    email: 'hbingley1@plala.or.jp',
  },
  {
    id: 3,
    firstName: 'Terrill',
    lastName: 'Hills',
    maidenName: 'Hoeger',
    age: 38,
    gender: 'male',
    email: 'rshawe2@51.la',
  },
];

const jsonData = JSON.stringify(users);
const data = JSON.parse(jsonData);
console.log(data);
