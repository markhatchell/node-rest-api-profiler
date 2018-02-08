# Node Rest API Speed Profiler

[![Test Coverage](https://api.codeclimate.com/v1/badges/0c4845d46e02823dbea3/test_coverage)](https://codeclimate.com/github/markhatchell/node-rest-api-profiler/test_coverage)
[![CircleCI](https://circleci.com/gh/markhatchell/node-rest-api-profiler.svg?style=svg)](https://circleci.com/gh/markhatchell/node-rest-api-profiler)

This is a small node app that profiles a list of sites and corresponding urls for each site gathering the time it takes
to complete the request. It is supposed to give a general representation of the speed at which a restual api service
is fulfilling requests. The requests are made in a synchronous manner as to only hit one endpoint at a time. This method
of request queuing with ensure that each frame has its full CPU Cycle potential to complete the request.

I created it to test the speed of a few different frameworks (Ruby on Rails, CakePHP, NodeJS Express,
and Python's Django) in helping to illustrate the difference in response times.
Each framework will be sorting through the same list of items and returning the same result to try to
keep the scientific controls in a good place.


# Setup

```
git clone https://github.com/markhatchell/node-rest-api-profiler.git
cd node-rest-api-profiler
npm install

```

You will then need to specify the sites and urls you would like to profile.

There is a site.example.js file that demonstrates the object structure for the list of sites and urls to profile.

Make a copy of the sites.example.js file renaming it to sites.js.

Add your list of sites and urls.

You are now ready to run the profiler.



# Running

The app is written with ES6 and uses babel to compile back to es2015.

To run the app

```
npm start

```

`npm start` will compile the app using babel and then run the built app.



# Testing

I used JEST and Nock for testing and request mocking.

To run the tests simply run

```
npm run test

```


# Future Features

 - Display a tables of results in the terminal rather then a list of urls and times
 - Display overall comparison of results between frameworks
 - Write a React front end for easy of use and display of results with data a visualization library
 - Implement CD and publish as a web app.

