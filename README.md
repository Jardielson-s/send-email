<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a> <a href="https://aws.amazon.com/pt/ses/" target="blank"><img src="https://www.2cloud.com.br/wp-content/uploads/2022/01/AWS_SES-1.png" width="200" alt="Aws ses Logo" /></a> <a href="https://www.docker.com/" target="blank"><img src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png" width="200" alt="Docker Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) 
This email sending service is a microservice with aws ses capability for sending email.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

```bash
# dev
$ docker-compose up dev

# production
$ docker-compose up production
```

## Url

```bash
# api doc
http://localhost:3000/api

# api post
http://localhost:3000/email/send
```