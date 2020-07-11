import {observable, autorun} from "mobx";

const showReassignObservableExample = async () => {
    let reassignedObservable = observable([1, 2, 3, 4]);
    let normalObservable = observable([1, 2, 3, 4]);

    autorun(() => {
        console.log(reassignedObservable.length, reassignedObservable, "reassignedObservable");
    });

    autorun(() => {
        console.log(normalObservable.length, normalObservable, "normalObservable");
    });

    // will not trigger auto run anymore
    reassignedObservable = [12321] as any;

    // will trigger
    normalObservable.push(5555);

    console.log(reassignedObservable, normalObservable, "debug example");
};

export default showReassignObservableExample;
