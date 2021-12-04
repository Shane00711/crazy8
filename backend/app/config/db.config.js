module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "The00711Group",
  DB: "crazy8",
  PORT: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};