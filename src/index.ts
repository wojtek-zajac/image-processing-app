import express from 'express';
import routes from './routes';
import logger from './utilities/logger';

const app = express();
const port = 3000;

app.get('/countries', logger, (req: express.Request, res: express.Response) => {
  res.send('cities');
});

app.get('/cities', logger, (req: express.Request, res: express.Response) => {
  res.send('cities');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;

// const myFunc = (num: number) => num * 5;
//
// console.log('hello, world');

// export default myFunc;
