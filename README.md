# Getting Started with Snap Game
This project was configured with `Webpack`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Once finished it'll open [http://127.0.0.1:8888](http://127.0.0.1:8888) to show an interactive treemap visualization of the contents of all your bundles.\
**Note: to activate this feature go to `./webpack/webpack.prod.js` and uncomment line 8 **

Run the app after the build process by `cd ./build` followed by `npx serve`.\
Your app is ready to be deployed!

### `yarn lint`

Lint your files and tries to fix them, if not successful you will see the lint warnings and errors in the console.  


### `yarn format`

Format your code based on the prettier config rules

**Note: It might conflict with eslint's two empty lines rule**
Avoid using `yarn format` if you are planning to keep this eslint config.\
You can use `yarn lint` instead.

It's because prettier dose not support this rule.
You can learn more in [Issue #1610 . 2 new lines after import](https://github.com/prettier/prettier/issues/1610).
