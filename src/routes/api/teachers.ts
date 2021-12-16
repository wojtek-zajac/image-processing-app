import express from 'express';

const teachers = express.Router();

teachers.get('/', (req: express.Request, res: express.Response) => {
  res.send('Teachers route');
});

export default teachers;
