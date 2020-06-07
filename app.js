const faker = require('faker');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '...',
//   database: 'ig'
// });

// connection.connect();
// connection.query('select count(*) as total from comments', (err, results, fields) => {
//   console.log(results[0].total);
//   console.log(results);
// });

// connection.end();

const pool = require('./mysql-pool');

// ===== Inserting data =====
// const q = 'insert into users (email) values ("rusty_the_dog@gmail.com")';

// ===== Inserting data #2 =====
// const person = { email: 'Jenny467@gmail.com' };
// const q = 'insert into users SET ?';

// ===== Insert data #3 =====
// const data = [
//   ['aa@gmail.com', '2017-05-01 03:51:37'],
//   ['bb@gmail.com', '2017-05-01 03:51:37'],
//   ['cc@gmail.com', '2017-05-01 03:51:37']
// ];
// const q = 'insert into users (email, created_at) values ?';

// ===== Insert data #4 =====
const data = [];
for (var i = 0; i < 500; i++) {
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}

const q = 'insert into users (email, created_at) values ?';
pool.query(q, [data], (err, results, fields) => {
  if (err) {
    throw err;
  }

  console.log(results);

  pool.end(() => { });
});