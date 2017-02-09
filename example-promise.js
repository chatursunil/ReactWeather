function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number'){
           reject('Arguments are not numeric'); 
        } else if (a === undefined || b === undefined) {
            reject('One or more arguments missing');
        } else {
            resolve(a + b);
        }
    });
}

addPromise(1,3).then(result => console.log('success', result), err => console.log('error', err));
addPromise(2,'b').then(result => console.log('success', result), err => console.log('error', err));
addPromise(5).then(result => console.log('success', result), err => console.log('error', err));