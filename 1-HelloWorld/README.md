### Initialize
  ```
  npm init
  ```
  ```
  npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6
  ```

### Dependencies
* Production
  ```
  npm install --save express apollo-server-express graphql graphql-tools ncp http graphql-import-node compression cors typescript graphql-tools graphql-playground-middleware-express ts-node
  ```
* Development
  ```
  npm install --save-dev nodemon @types/graphql @types/compression @types/express @types/cors @types/node
  ```