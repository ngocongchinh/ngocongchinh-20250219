## Test Question No. 1

Crypto Search is a project built on [Nextjs](https://nextjs.org/) for the frontend site and [Nestjs](https://nestjs.com/) for the backend.

### Run project with [Docker](https://www.docker.com/)

```bash
docker-compose up --build
```

- App served @ `http://localhost:3000`

### Run project without Docker

- [How to install the front-end site](https://github.com/ngocongchinh/ngocongchinh-20250219/tree/main/frontend)
- [How to install the backend](https://github.com/ngocongchinh/ngocongchinh-20250219/tree/main/backend)

## Test Question No. 2

The Stock Profit Calculation Function is written in the file [`/src/utils/calculateMaxProfit.ts.`](https://github.com/ngocongchinh/ngocongchinh-20250219/tree/main/backend/src/utils)

```bash
# how to use
import { calculateMaxProfit } from 'src/utils/calculateMaxProfit';

const stockPriceList = [2, 3, 6, 4, 3];

console.log(calculateMaxProfit(stockPriceList)); // Output: 4

# run the test
npm run test

```
