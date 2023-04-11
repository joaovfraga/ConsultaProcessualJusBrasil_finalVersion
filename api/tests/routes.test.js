const request = require('supertest')
const app = require('../app.js')

describe('Process API', () => {
    it('should show all processes', async () => {
        const res = await request(app).get('/api/processes')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('processes')
    }),

    it('process should show all histories', async () => {
        const res = await request(app).get('/api/processes')
        expect(res.statusCode).toEqual(200)
        expect(res.body.processes[0]).toHaveProperty('histories')
    }),

    it('process should show all related parts', async () => {
        const res = await request(app).get('/api/processes')
        expect(res.statusCode).toEqual(200)
        expect(res.body.processes[0]).toHaveProperty('related_parts')
    }),

    it('should show a process', async () => {
        const res = await request(app).get('/api/processes/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('process')
    })

    it('process should show all histories', async () => {
        const res = await request(app).get('/api/processes/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body.process).toHaveProperty('histories')
    })

    it('process should show all related parts', async () => {
        const res = await request(app).get('/api/processes/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body.process).toHaveProperty('related_parts')
    })
})