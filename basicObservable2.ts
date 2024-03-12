import { Observable, Observer, Subscriber } from "rxjs";

console.log("basic observable with explicit Observer typed handlers");

// ********************** Functionality of the "Observable" (how data is generated)
let observable1 = new Observable(observableBehaviour)

function observableBehaviour(someHandlers: Subscriber<any>) {
    someHandlers.next("1");
    someHandlers.next("2");
    someHandlers.next("3");
    someHandlers.complete();
}

// ********************** Functionality of the "Subscriber" (how data is handled / processed)
// *** Done via class implementing the Observer interface
class HandlersClass<T> implements Observer<T> {
    next(value: T): void {
        console.log('handling:', value);
    }

    error(error: any): void {
        console.log("error ", error);
    }

    complete(): void {
        console.log("Done, no more data.");
    }
}

let handlers = new HandlersClass<string>();

// ********************** assign the handlers to the observable, thus starting the whole thing...
observable1.subscribe(handlers);

