# NLW
Project developed at Next Level Week 6, organized by RocketSeat.

## Running locally

### Config the environment
- Set the source and name to create your SQLite database;
- [Generate one MD5 Hash]("https://www.md5hashgenerator.com/") for your API

### Install dependencies
```
$ yarn install
```
### Create database
```
$ yarn typeorm migration:run
```

### Start server
```
$ yarn dev
```