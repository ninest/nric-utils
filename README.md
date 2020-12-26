<p align="center">
  <img src="https://raw.githubusercontent.com/ninest/nric-utils/master/assets/nric-multiple.svg" alt="IC Cards including the ugly green one" width="175" >
</p>
<h1 align="center">NRIC Utils</h1>
<p align="center">Functions to <b>validate</b> and <b>mask</b> Singapore NRICs</p>
<p align="center">
  <img src="https://img.shields.io/github/license/ninest/nric-utils?style=flat-square" alt="MIT" />

  <img alt="npm" src="https://img.shields.io/npm/v/nric-utils?style=flat-square">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/ninest/nric-utils/Run%20tests?style=flat-square">

  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/nric-utils?style=flat-square">

  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/nric-utils?style=flat-square">
</p>

## Features
- [x] Validate NRICs
- [x] Mask NRICs (`SXXXXXXXA => SXXXA`)
- [x] Validate masked NRICs
- [ ] Yup integration
  - [ ] Yup method for validating NRICs
  - [ ] Yup method for validating masked NRICs
- [ ] Generate NRICs
- [ ] Tests
  - [x] Tests for validating NRICs
  - [x] Tests for masking NRICs
  - [x] Tests for validating masked NRICs
  - [ ] Tests for generating NRICs

## Docs

### Installation

```bash
npm install nric-utils
```

### Usage

```js
const { maskNric, validateNric } = require('nric-utils');
// Or
import { maskNric, validateNric } from 'nric-utils';

const nric = 'S0000002G';

validateNric(nric); 
// => true

maskNric('S0000002G'); 
// => 002G

/* 
Pass in true to maskNric to also include the first letter:
*/
maskNric('S0000002G', true); 
// => S002G
```

## ⚙Build setup

Clone or fork the repository, then run

```bash
npm install

# to runs tests
npm run test -s

# format with prettier
npm run format

# build (convert to JavaScript)
npm run build
```

Format and ensure tests pass before pushing.

## License

MIT

<img src="https://raw.githubusercontent.com/ninest/nric-utils/master/assets/nric.svg" alt="Blue IC Card" width="150" >
