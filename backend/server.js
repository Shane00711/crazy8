'use strict';

const Hapi = require('@hapi/hapi');
const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "crazy8",
  password: "The00711Group",
  port: 5432,
};

// Connect with a connection pool.
const pool = new Pool(credentials);
async function poolDemo() {
  const now = await pool.query("SELECT NOW()");
//   await pool.end();

  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

async function getPerson(personId) {
  const text = `SELECT * FROM player`;
  const values = [];
  return pool.query(text, values);
}

const init = async () => {
    const personId = "1";
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });
    
    await server.start();
    console.log('Server running on %s', server.info.uri);
    const poolResult = await poolDemo();
    console.log("Time with pool: " + poolResult.rows[0]["now"]);

    const clientResult = await clientDemo();
    console.log("Time with client: " + clientResult.rows[0]["now"]);

    // Obtain the full person object from the database.
    const getPersonResult = await getPerson(personId);
    console.log(
        "Result of SELECT query for person '" +
        personId +
        "': " +
        JSON.stringify(getPersonResult.rows[0], null, "  ")
    );
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();