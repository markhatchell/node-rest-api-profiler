import Profiler from "./profiler";

const nock = require('nock');
const response = require('../fixtures/blank_data').default;


describe('Profiler Test', () => {

    beforeEach(() => {
        nock('http://127.0.0.1:8080')
            .get('/')
            .reply(200, response);
    });

    
    let testUrl = 'http://127.0.0.1:8080';
    let profiler = new Profiler();

    it('should init', () => {
        expect(typeof profiler).toEqual('object');
    });

    it('should not have a url from init', () => {
        expect(profiler.url).toBeNull();
    });

    it('should have a url from setter', () => {
        profiler = new Profiler();
        profiler.setUrl(testUrl);
        expect(profiler.url).toBe(testUrl);
    });

    it('should start the timer', () => {
        profiler.startTimer();
        expect(profiler.times.start).toBeDefined();
    });

    it('should end the timer', () => {
        profiler.endTimer();
        expect(profiler.times.end).toBeDefined();
    });

    it('should calculate the total time is ms', () => {
        profiler.calculateTotalTime();
        expect(profiler.times.total).toBeDefined();
    });

    it('should make a request', () => {
        return profiler.run().then((res) => {
            expect(typeof res).toEqual('object');
        });
    });

});