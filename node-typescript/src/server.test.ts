import req from 'supertest';
import server from './server';

test('[get] /', async () => {
    const res = await req(server).get('/');
    expect(res.text).toBe('ola, API NodeJs com TypeScript!');
});