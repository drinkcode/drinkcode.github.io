const countapi = require('countapi-js');

console.log(countapi)


// countapi.get('sibaltest.com', 'test').then((result) => { console.log(result) });
countapi.set('sisdafbaltest.com', 'test', 3).then((result) => { console.log(result) });