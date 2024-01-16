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


    it('http request Test', async () => {
        
    });

});

