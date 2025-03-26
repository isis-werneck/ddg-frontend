# Digital Document Generator

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## DataProvider

We are using our custom dataProvider in [dataProvider.ts](./src/dataProvider.ts), from the `hydraDataProvider` given by the [@api-platform/admin](https://api-platform.com/docs/admin/) package.

## API Types

For manages API types we get advantage of the [openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen) package to keep type consistency.

To reload type definitions, run in your local machine:
```shell
$ npm run types:openapi
```
