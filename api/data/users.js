const bcryptjs = require("bcryptjs");
 
const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Shahbaz",
    email: "shahbaazkyz@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
  {
    name: "Nabia",
    email: "Nabia@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
];

module.exports = users;

