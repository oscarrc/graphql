### Initialize
  ```
  npm init
  ```
  ```
  npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6 --resolveJsonModule true
  ```

### Dependencies
* Production
  ```
  npm install --save express graphql ncp http graphql-import-node compression cors lodash typescript graphql-tools graphql-playground-middleware-express apollo-server-express
  ```
* Development
  ```
  npm install --save-dev nodemon @types/compression @types/express @types/cors @types/lodash @types/node @types/graphql

  ```