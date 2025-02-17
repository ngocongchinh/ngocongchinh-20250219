## Test Question No. 1

Crypto Search is a project built on [Nextjs](https://nextjs.org/) for the frontend site and [Nest](https://nestjs.com/) for the backend.

### Run project with [Docker](https://www.docker.com/)

```bash
docker-compose up --build
```

- App served @ `http://localhost:3000`

### Run project without Docker

- [How to install the front-end site](https://nextjs.org/)
- [How to install the backend](https://nestjs.com/)

## Test Question No. 2

The Stock Profit Calculation Function is written in the file `/src/utils/calculateMaxProfit.ts.`

```bash
# how to use
import { calculateMaxProfit } from 'src/utils/calculateMaxProfit';

const stockPriceList = [2, 3, 6, 4, 3];

console.log(calculateMaxProfit(stockPriceList)); // Output: 4

# run the test
npm run test

```
