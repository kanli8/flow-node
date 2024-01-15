import request from 'supertest';
import app from '../server';
import { Server } from 'http';

describe('Test Express App', () => {
    beforeAll((done) => {
        app.listen(done);
    });

    afterAll((done) => {
        app.off('listening', done);
    });

    it('should return "Hello, World!"', async () => {
        it('should return "Hello, World!"', async () => {
            const response = await request(app).get('/');
            expect(response.text).toBe('Hello, World!');
        });
    });
});

