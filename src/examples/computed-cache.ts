import {action, autorun, computed, observable} from "mobx";

class ComputedCache {
    @observable
    numberA: number = 5;
    @observable
    numberB: number = 10;

    id: string;
    private _innerCounter = 0;

    constructor(id: string) {
        this.id = id;
    }

    @action
    updateA(val: number) {
        this.numberA = val;
    }

    @action
    updateB(val: number) {
        this.numberB = val;
    }

    @computed
    get sum() {
        this._innerCounter++;
        console.log(`${this.id} computing ${this._innerCounter}! numberA:${this.numberA}, numberB:${this.numberB}`);
        return this.numberA + this.numberB;
    }
}

const showCacheExample = () => {
    const cachedOne = new ComputedCache('im cached!');
    const notCachedOne = new ComputedCache(`why i'm not cached`);

    console.log(cachedOne, notCachedOne, 'for debug');

    // "cachedOne" is watched so it computed value will be cached
    autorun(() => {
        console.log(cachedOne.sum, 'will it cache');
    });

    for (var i=0;i<3;i++) {
        // you can see now the "sum" function is not called because it is cached
        console.log(cachedOne.sum);
        // here you will the "sum" function is being called all the time
        console.log(notCachedOne.sum);
    }
};


export default showCacheExample;
