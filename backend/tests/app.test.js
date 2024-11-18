const request = require('supertest');
const app = require('../app');

test('API root endpoint responds with "API Working"', async () => {
    const res = await request(app).get('/api');
    expect(res.text).toBe('API Working');
});
