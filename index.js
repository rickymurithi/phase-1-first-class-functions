function receivesAFunction(spy) {
    spy();
}

const returnsANamedFunction = () => receivesAFunction;

function returnsAnAnonymousFunction () {
    return function() {
    }
}





