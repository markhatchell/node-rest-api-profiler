# Node Rest API Speed Profiler

| 100% code coverage | tests passing 100% | build passing |

This is a small node app that profiles a list of sites and corresponding urls for each site gathering the time it takes
to complete the request. It is supposed to give a general representation of the speed at which a restual api service
is fulfilling requests. The requests are made in a synchronous manner as to only hit one endpoint at a time. This method
of request queuing with ensure that each frame has its full CPU Cycle potential to complete the request.

I created it to test the speed of a few different frameworks (Ruby on Rails, CakePHP, NodeJS Express,
and Python's Django) in helping to illustrate the difference in response times.
Each framework will be sorting through the same list of items and returning the same result to try to
keep the scientific controls in a good place.



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
 - Implement CI/CD and publish as a web app.

