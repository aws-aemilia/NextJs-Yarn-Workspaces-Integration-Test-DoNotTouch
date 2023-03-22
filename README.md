
## Getting started

```shell
$ yarn install
$ yarn workspace @project/web-app dev
```

## Renaming for your project

I named the example workspace packages `@project/components` and `@project/web-app`. You can safely rename it to `@my-awesome-project/components` or something like that.

## Custom types

The `@types` directory is for your custom global types. Since each Next.js application has to own a `tsconfig.json` of its own, these types are also included in [packages/web-app/tsconfig.json](packages/web-app/tsconfig.json).

## "Where should I add custom @types packages?"

Since multiple packages can use the same typings, and it is very unlikely for different packages to depend on different versions of those typings, @types packages should go into `devDependencies` of the [base package.json](package.json).

## Running

### Development

1. Install dependencies

    ```shell script
    $ yarn
    ```

1. Start the web-app next.js application

    ```shell script
    $ yarn workspace @project/web-app dev
    ```

   Then the application should be accessible on [http://localhost:3000](http://localhost:3000).
