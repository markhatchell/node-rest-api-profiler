import Runner from "./runner";

let sites;
try {
    sites = require('../sites').default;
} catch (e) {
    console.error('Please specify a sites.js file in the project root.');
    process.exit(0);
}

let runner = new Runner(sites);
runner.begin().then((sites) => {
    for (let site of sites) {
        console.log(site.serverName);
        for (let test of site.tests) {
            console.log(test.url, test.response.total)
        }
    }
});
