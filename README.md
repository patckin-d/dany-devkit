# Dany DevKit

Basic development configurations by Dany Pa.

## Features

- ESLint configuration with Vue support
- Prettier configuration
- Git ignore rules

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Eslint:

```js
// eslint.config.js
import { setupDanyEslintConfig } from 'dany-devkit/configs/eslint.js';

const customEslintConfig = {}
export default setupTravelEslintConfig(customEslintConfig);
```

Prettier:
```js
// prettier.config.js
import { danyPrettierConfig } from 'dany-devkit/configs/prettier.js'

const customPrettierConfig = {}

export default {
  ...travelPrettierConfig,
  ...customPrettierConfig
}
```

### Build

To build the project:
```bash
npm run build
```

## License

MIT 