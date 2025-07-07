<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient, scalable, and maintainable server-side applications using Domain-Driven Design (DDD) and Onion Architecture.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<!-- ![Visitors](https://visitor-badge.laobi.icu/badge?page_id=deadislove.nestJS-onion-ddd-template) -->
![Visitors](https://img.shields.io/badge/visitors-1_total-brightgreen)
![Clones](https://img.shields.io/badge/clones-22_total_16_unique-blue) <!--CLONE-BADGE-->

# Project Overview:
This project uses [NestJS](https://github.com/nestjs/nest) with Domain-Driven Design (DDD) principles and Onion Architecture to structure server-side applications. It focuses on separating business logic, infrastructure, and external interfaces to ensure scalability and maintainability.

In this template, the project is divided into several layers such as application, domain, infrastructure, and interfaces. The domain layer includes all core business logic, including entities, aggregates, and services. The infrastructure layer manages the database connections and repository implementations, while the application layer coordinates the use cases and application-specific logic.

<a href='https://ko-fi.com/F1F82YR41' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Project Structure

```
/src
 ├── application      # Use Cases (Business Logic)
 ├── domain           # Entities, Aggregates, Domain Services
 ├── infrastructure   # Database, Repositories, External Services
 ├── interfaces       # Controllers, REST APIs, GraphQL, WebSockets
 ├── shared           # Common Utilities
 ├── config           # Configuration Management
 ├── main.ts          # Entry Point
 ├── tests            # Unit & Integration Tests
```

```
├───src
│   ├───application
│   ├───config
│   ├───domain
│   │   ├───Interfaces
│   │   ├───models
│   │   │   ├───DTO
│   │   │   ├───Entities
│   │   │   ├───reqeust
│   │   │   └───response
│   │   └───services
│   ├───infrastructure
│   │   ├───database
│   │   └───Repositories
│   ├───interfaces
│   │   └───user
│   └───shared
└───test
```
> Demo table schema
>
> ```
> CREATE TABLE "user" (
>   "id" INTEGER PRIMARY KEY AUTOINCREMENT,
>   "username" TEXT NOT NULL,
>   "password" TEXT NOT NULL,
>   "email" TEXT NOT NULL
> );
> ```
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Stay in touch

- Author - [Da-Wei Lin](https://www.linkedin.com/in/da-wei-lin-689a35107/)
- Website - [David Weblog](https://davidskyspace.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

[Template project](https://github.com/deadislove/nestJs-onion-ddd-template) is [MIT licensed](https://github.com/deadislove/nestJs-onion-ddd-template/blob/main/LICENSE.md).
