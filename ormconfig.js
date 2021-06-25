module.exports = {
  "type": "sqlite",
  "database": process.env.DATABASE,
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}