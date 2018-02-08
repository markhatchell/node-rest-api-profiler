import Profiler from "./profiler";
const waterfall = require('async-waterfall');

class Runner {

    constructor(sites) {
        this.sites = sites;
    }

    begin() {
        return new Promise((resolve, reject) => {
            let tasks = [];
            for (let siteIndex in this.sites) {
                for (let testCaseIndex in this.sites[siteIndex].tests) {
                    let profiler = new Profiler(this.sites[siteIndex].tests[testCaseIndex].url);
                    tasks.push((callback) => {
                        profiler.run().then((response) => {
                            this.sites[siteIndex].tests[testCaseIndex].response = response.times;
                            callback();
                        });
                    });
                }
            }
            waterfall(tasks, (a) => {
                resolve(this.sites);
            });
        });
    }


}

export default Runner;