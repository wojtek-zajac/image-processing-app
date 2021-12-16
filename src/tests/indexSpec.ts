// import myFunc from '../index';
//
// it('should expect myFunc(5) to equal 25', () => {
//     expect(myFunc(5)).toEqual(25);
// });

import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the /api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    });
});
