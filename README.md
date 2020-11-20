<p align="center">
  <img src="https://github.com/ninest/nric-utils/blob/master/assets/nric-multiple.svg" alt="IC Cards including the ugly green SAF one" width="175" >
</p>
<h1 align="center">NRIC Utils</h1>
<p align="center">Functions to validate and mask Singapore NRICs</p>

## 💳 Docs

```bash
npm install nric-utils
```

```js
import { maskNric, validateNric } from 'nric-utils';

const nric = 'S0000002G';

validateNric(nric); // true
maskNric('S0000002G'); // 002G
maskNric('S0000002G', true); // S002G
```

## ⚙️ Build setup

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

Run `npm run format` before commiting.

## 📜 License

MIT


<img src="https://github.com/ninest/nric-utils/blob/master/assets/nric.svg" alt="Blue IC Card" width="150" >