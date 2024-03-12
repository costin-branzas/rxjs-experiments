"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log("basic observable with \"anonymoys\" object handlers");
// ********************** Functionality of the "Observable" (how data is generated)
let observable1 = new rxjs_1.Observable(observableBehaviour);
function observableBehaviour(someHandlers) {
    someHandlers.next("1");
    someHandlers.next("2");
    someHandlers.next("3");
    someHandlers.complete();
}
// ********************** Functionality of the "Subscriber" (how data is handled / processed)
// *** Done via an "anonymous" object
let handlers = {
    next: nextHandler,
    error: errorHandler,
    complete: completeHandler,
};
function nextHandler(data) {
    console.log("handling: " + data.toString());
}
function errorHandler(error) {
    console.log("error " + error.toString());
}
function completeHandler() {
    console.log("Done, no more data.");
}
// ********************** assign the handlers to the observable, thus starting the whole thing...
observable1.subscribe(handlers);
