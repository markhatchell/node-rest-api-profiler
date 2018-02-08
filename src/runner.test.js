import Runner from "./runner";

const nock = require('nock');
const sites = require('../fixtures/sites').default;
const response = require('../fixtures/blank_data').default;


describe('Profiler Test', () => {
    let runner = new Runner(sites);

    beforeEach(() => {
        nock('http://127.0.0.1:8080')
            .get('/')
            .reply(200, response);
    });

    it('should init', () => {
        expect(typeof runner).toEqual('object');
    });

    it('should run the tests', () => {
        return runner.begin().then((res) => {
            expect(typeof res).toEqual('object');
            expect(res[0].tests[0].response.total).toBeGreaterThanOrEqual(0);
        });
    });


});