function supercomputer(callback) {
    callback();
    return 42;
}

var answer = supercomputer(function() {
    console.log('the answer is ', answer);
});
