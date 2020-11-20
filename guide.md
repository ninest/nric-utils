# Making a package with typescript

## Install TS
```
npm i typescript
```

Add `tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./lib",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/tests/*"]
}
```

Add script to `package.json`:

```
"build" : "tsc"
```

Add `/lib` to `.gitignore`

## Add prettier

```
npm i prettier -D
```

Add `.prettierrc`:

```
{
  "printWidth": 120,
  "trailingComma": "all",
  "singleQuote": true,
  "semi": true
}
```

Add script to `package.json`:


```
"format": "prettier --write \"src/**/*.{ts,js}\""
```

## Configure what goes to NPM
In `package.json` add:
```
“files”: [“lib/**/*”]
```

## Jesting
```
npm i jest ts-jest ts-node @types/jest -D
```

Add `jest.config.ts`:

```
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
```

Add script to `package.json`:

```
"test": "jest --env=node",
```