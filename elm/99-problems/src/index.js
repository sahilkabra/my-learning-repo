'use strict';

require('./main.scss');

var Elm = require('./main.elm');
var mountNode = document.getElementById('elm-mount');
var app = Elm.Main.embed(mountNode);
