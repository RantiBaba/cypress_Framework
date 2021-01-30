const date = new Date();

// const date = Date.now();
// console.log(date);

// const date = new Date("2018, 01,31");
// console.log(date);

// console.log(date.toTimeString());
// console.log(date.toISOString());

// const dated = Date.now()
// console.log(dated);

console.log(new Intl.DateTimeFormat('en-GB').format(date));

console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date));


