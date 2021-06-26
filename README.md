# NLW
Project developed at Next Level Week 6, organized by RocketSeat.

## Running locally

### Config the environment
- Set the source and name to create your SQLite database;
- [Generate one MD5 Hash]("https://www.md5hashgenerator.com/") for your API
- [Generate SendGrid Key]("https://www.luiztools.com.br/post/como-enviar-emails-em-node-js-usando-sendgrid/")

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
