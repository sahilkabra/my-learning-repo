import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

//setting up the default document and window for jsdom
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) global[key] = window[key];
});


//telling chai to use immutable
chai.use(chaiImmutable);
