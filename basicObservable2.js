"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log("basic observable with explicit Observer typed handlers");
// ********************** Functionality of the "Observable" (how data is generated)
let observable1 = new rxjs_1.Observable(observableBehaviour);
function observableBehaviour(someHandlers) {
    someHandlers.next("1");
    someHandlers.next("2");
    someHandlers.next("3");
    someHandlers.complete();
}
// ********************** Functionality of the "Subscriber" (how data is handled / processed)
// *** Done via class implementing the Observer interface
class HandlersClass {
    next(value) {
        console.log('handling:', value);
    }
    error(error) {
        console.log("error ", error);
    }
    complete() {
        console.log("Done, no more data.");
    }
}
let handlers = new HandlersClass();
// ********************** assign the handlers to the observable, thus starting the whole thing...
observable1.subscribe(handlers);
