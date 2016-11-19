/**
 * Created by Arne on 19-11-2016.
 */

require('app-module-path').addPath(__dirname + '/api');

global.R = require('ramda');

const Express = require('express');
const App = Express();

App.use(Express.static('views'));

App.listen(80, () => console.log('Quizmas App Launched'));
