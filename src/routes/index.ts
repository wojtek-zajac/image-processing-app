import express from 'express';
import students from './api/students';
import teachers from './api/teachers';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main API route');
});

routes.use('/students', students);

routes.use('/teachers', teachers);

export default routes;
