# node-postgres-starter-kit

Node Postgres starter kit

## Author

**Nhan Nguyen**

* [github/nhannguyendevjs](https://github.com/nhannguyendevjs)
* [twitter/nhannguyendevjs](https://twitter.com/nhannguyendevjs)
* [linkedin/nhannguyendevjs](https://www.linkedin.com/in/nhannguyendevjs)
* [dev.to/nhannguyendevjs](https://dev.to/nhannguyendevjs)
* [medium/nhannguyendevjs](https://medium.com/@nhannguyendevjs)

## License

Copyright © 2024, [Nhan Nguyen](https://github.com/nhannguyendevjs).

Released under the [MIT License](LICENSE).

## Things We Code With

![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge)
![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
![Nodejs](https://img.shields.io/badge/Nodejs-43853d?logo=Node.js&logoColor=white&style=for-the-badge)
![Postgres](https://img.shields.io/badge/Postgres-316192?logo=postgresql&logoColor=white&style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-46a2f1?logo=docker&logoColor=white&style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-ffffff?logo=prisma&logoColor=black&style=for-the-badge)

## Docker

### Installation

You can download and install Docker at https://www.docker.com/

### Network

```bash
docker network create node-postgres-network
```

### Ubuntu

```bash
docker run --name node-postgres-ubuntu --network node-postgres-network -p 80:8080 -p 443:8443 -p 22:22 -itd ubuntu:latest
```

### PostgreSQL

```bash
docker run --name node-postgres --network node-postgres-network -p 5432:5432 -e POSTGRES_DB=node -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -d postgres:latest

docker exec -it node-postgres
```

#### URI

```txt
postgres://admin:admin@localhost:5432/node?schema=public
```

### Redis

```bash
docker run -d --network node-postgres-network --name node-postgres-redis -p 6379:6379 redis:latest
```

## Coding Naming Conventions

➖ PascalCase 👉 Classes and Methods

➖ camelCase 👉 variable and function names

➖ snake_case 👉 file names and variable identifiers

➖ kebab-case 👉 HTML attributes and CSS classes

➖ UPPERCASE 👉 CONSTANTS and ENUMERATIONS

➖ UPPER_SNAKE_CASE 👉 CONSTANTS and ENVIRONMENT_VARIABLES

## Git Branch Naming Convention

### Code Flow Branches

➖ Development (dev)

All new features and bug fixes should be brought to the development branch.

➖ QA/Test (test)

Contains all codes ready for QA testing.

➖ Staging (staging, Optional)

It contains tested features that the stakeholders wanted to be available either for a demo or a proposal before elevating into production.

➖ Master (master)

The production branch, if the repository is published, is the default branch being presented.

### Temporary Branches

#### ➖ Feature

Any code changes for a new module or use case should be done on a feature branch. This branch is created based on the current development branch. When all changes are Done, a Pull Request/Merge Request is needed to put all of these to the development branch.

Examples

feature/AZURE-1234

feature/AZURE-5678

#### ➖ Bug Fix

If the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch.

Examples

bugfix/AZURE-1234

bugfix/AZURE-5678

#### ➖ Hot Fix

If there is a need to fix a blocker, do a temporary patch, or apply a critical framework or configuration change that should be handled immediately, it should be created as a Hotfix. It does not follow the scheduled integration of code and could be merged directly to the production branch and then into the development branch later.

Examples

hotfix/disable-endpoint-zero-day-exploit

hotfix/increase-scaling-threshold

#### ➖ Experimental

Any new feature or idea that is not part of a release or a sprint. A branch for playing around.

Examples

experimental/dark-theme-support

#### ➖ Build

A branch specifically for creating specific build artifacts or for doing code coverage runs.

Examples

build/azure-metric

#### ➖ Release

A branch for tagging a specific release version.

Examples

release/app-1.0.0

#### ➖ Merging

A temporary branch for resolving merge conflicts, usually between the latest development and a feature or Hotfix branch. This can also be used if two branches of a feature being worked on by multiple developers need to be merged, verified, and finalized.

Examples

merge/dev_lombok-refactoring

merge/combined-device-support

## PostgreSQL Naming Conventions

Use clear, descriptive names. Use camelCase for multi-word names. Avoid using PostgreSQL reserved words.

## Visual Studio Extensions

* Prettier
* ESLint
* SonarLint
* Code Spell Checker

## Issues
