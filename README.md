# yo0-config

My personal Prettier configuration.

## Usage

1.  Add this repository as a `git submodule`:

    ```bash
    git submodule add https://github.com/your-username/yo0-config.git config/yo0-config
    ```

2.  Create a `prettier.config.js` (or `.mjs`) in your project root and import the configuration:

    ```javascript
    import config from "./config/yo0-config/prettier.config.mjs";

    export default {
      ...config,
      // You can override any settings here
    };
    ```

3.  Make sure you have Prettier installed in your project:

    ```bash
    npm install --save-dev prettier
    # or yarn, pnpm, etc.
    ```
