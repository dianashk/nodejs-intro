function supercomputer(callback) {
    callback();

    // nextTick will help make sure the answer isn't used before it's been returned
    // process.nextTick(callback);

    return 42;
}

var answer = supercomputer(function() {
    console.log('the answer is ', answer);
});
