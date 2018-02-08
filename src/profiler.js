const request = require('request');

class Profiler {

    constructor(url) {
        this.url = url || null;
        this.times = {
            start: undefined,
            end: undefined,
            total: 0
        };
        this.requestStatus = undefined;
    }

    setUrl(url) {
        this.url = url;
    }

    run() {
        return new Promise((resolve, reject) => {
            this.startTimer();
            request(this.url, (error, response, body) => {
                this.endTimer();
                this.requestStatus = response && response.statusCode;
                this.calculateTotalTime();
                resolve(this);
            });
        });
    }

    startTimer() {
        this.times.start = new Date();
    }

    endTimer() {
        this.times.end = new Date();
    }

    calculateTotalTime() {
        this.times.total = this.times.end - this.times.start;
    }


}

export default Profiler;