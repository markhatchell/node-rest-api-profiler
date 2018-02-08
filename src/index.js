import Runner from "./runner";

let sites = [
    {
        serverName: 'localhost - PHP',
        tests: [
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
        ]
    },
    {
        serverName: 'localhost - PYTHON',
        tests: [
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
        ]
    },
    {
        serverName: 'localhost - RUBY',
        tests: [
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
            {
                url: 'http://127.0.0.1:8080',
                response: undefined
            },
        ]
    }
];

let runner = new Runner(sites);
runner.begin().then((sites) => {
    for (let site of sites) {
        console.log(site.serverName);
        for (let test of site.tests) {
            console.log(test.url, test.response.total)
        }
    }
});
