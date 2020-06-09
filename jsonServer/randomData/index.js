/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const { count } = require('yargs').argv;
const generator = require('./RandomData');

const dbPath = path.join(__dirname, '../', 'db.json');
const contacts = generator.generateMany(count);

fs.writeFile(dbPath, JSON.stringify(contacts), error => {
    if (error) console.error(error);
    console.log('Random contacts generate success!');
});
