import { Observable, Subscriber } from "rxjs";

console.log("basic observable with \"anonymoys\" object handlers");

// ********************** Functionality of the "Observable" (how data is generated)
let observable1 = new Observable(observableBehaviour)

function observableBehaviour(someHandlers: Subscriber<any>) {
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
}

function nextHandler<T>(data: T){
    console.log("handling: " + (<any>data).toString());
}

function errorHandler(error: any){
    console.log("error " + error.toString());
}

function completeHandler() {
    console.log("Done, no more data.");
}

// ********************** assign the handlers to the observable, thus starting the whole thing...
observable1.subscribe(handlers);
