## Description

[Nest](https://github.com/nestjs/nest) framework dependency injection with Factory pattern. An example showcasing dynamically loading various data sources based on query parameters.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# dev + watch mode
$ npm run start:dev
```

## Test endpoints

| Endpoint                                       | Details                          |
| ---------------------------------------------- | -------------------------------- |
| http://localhost:3000/api/data?source=source01 | Should return data from source 1 |
| http://localhost:3000/api/data?source=source02 | Should return data from source 2 |
| http://localhost:3000/api/data?source=source03 | Should return data from source 3 |

## Folder structure

**/src/dynds/**

Contains the sample module `DynDS` which consists of 3 different services (data sources) located under sub folder `services`. These services can be present and loaded from any other module (they are kept here to be showcased as an example).

**/src/api/**

Contains the module which utilizes `DynDS` and loads the data dynamically from the services.

| ℹ️ Note                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| As the service classes used within `DynDSModule` follow Dependency Injection, it does introduces overhead for the application, as all the services will still be initialized even if they are not used, if this is a major concern for your application then consider implementing lazy initialization |
