# Angular / Express Seed

## Description
A simple seed project that uses Express on the backend and AngularJS on the frontend.

## Quick Start (Local Development)

- Install Grunt globally using `bower install -g grunt-cli`
- Install Browserify globally using `npm install -g browserify`
- Clone the project with `git clone https://github.com/neilff/angular-express-seed.git`
- Run `npm install`
- Run `grunt` to start the local server

## Technologies

- Bootstrap 3.0.3
- AngularJS 1.2.7
- Grunt
- Express 3.4.4
- Request 2.30

## Available Grunt commands

#### Development - `grunt`
Run `grunt` to initialize automatic LESS compilation, local express server, and JS Hint

## Express Configuration
I've included a very basic Express setup. It will provide you with a local server, and a proxy setup to consume APIs that are not local. The proxy uses Request. By default the proxy will consume the [LCBO API](http://lcboapi.com/).


