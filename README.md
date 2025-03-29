# Dany DevKit

Basic development configurations by Dany Pa.

## Features

- ESLint configuration with Vue support
- Prettier configuration
- Git ignore rules

## Installation

1. Add the GitHub Packages registry to your `.npmrc` file:
   ```bash
   echo "@patckin-d:registry=https://npm.pkg.github.com" >> .npmrc
   ```

2. Install the package:
   ```bash
   npm install dany-devkit
   ```

## Usage

Eslint:

```js
// eslint.config.js
import { setupDanyEslintConfig } from 'dany-devkit/configs/eslint.js';

const customEslintConfig = {}
export default setupDanyEslintConfig(customEslintConfig);
```

Prettier:
```js
// prettier.config.js
import { danyPrettierConfig } from 'dany-devkit/configs/prettier.js'

const customPrettierConfig = {}

export default {
  ...danyPrettierConfig,
  ...customPrettierConfig
}
```

### Build

To build the project:
```bash
npm run build
```

## Publishing

To publish the package:

1. Create a GitHub Personal Access Token with `write:packages` scope
2. Login to GitHub Packages:
   ```bash
   npm login --registry=https://npm.pkg.github.com
   ```
3. Publish the package:
   ```bash
   npm publish
   ```

## License

MIT 