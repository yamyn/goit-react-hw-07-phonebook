/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const jsonServer = require('json-server');
const path = require('path');
const { port } = require('yargs').argv;

const dbPath = path.join(__dirname, 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
