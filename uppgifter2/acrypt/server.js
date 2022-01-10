const bcrypt = require('bcrypt');

const password = "cunt1234";
const saltRounds = 10;

const hashedPasswords = bcrypt.hashSync(password, saltRounds);

const match = bcrypt.compareSync('cunt1234', hashedPasswords);
console.log(match);