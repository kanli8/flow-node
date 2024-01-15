import request from 'supertest';
import app from '../server';
import { Server } from 'http';

describe('Test Express App', () => {
    beforeAll((done) => {
        app.listen(done);
    });

    afterAll((done) => {
        //close the server
        // app.close();
        app.close(done);
    });


    it('should return "Welcome to bezkoder application."', async () => {
        const response = await request(app).get('/api');
        // console.log(response.text);
        
        expect(response.body.message).toBe('Welcome to bezkoder application.');
    });

});

