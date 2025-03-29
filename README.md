# Dany DevKit

Basic development configurations by Dany Pa.

## Features

- ESLint configuration with Vue support
- Prettier configuration
- Git ignore rules

## Installation

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

1. Login to npm:
   ```bash
   npm login
   ```
2. Publish the package:
   ```bash
   npm publish
   ```

## License

MIT 