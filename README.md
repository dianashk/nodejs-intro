# nodejs-intro

## nextTick

  * nextTick.js - Example of when using process.nextTick is appropriate
  * compute.js - Example of a recursive function starving I/O if setImmediate isn't used

### to run

#### nextTick.js

  ```node nextTick.js```

  without changes you should see the answer is undefined

  after changing the callback to be wrapped in process.nextTick the answer should be 42

#### compute.js

  ```node compute.js```

  without changes you should see an exception, I/O is starved and stack exceeded

  ``` RangeError: Maximum call stack size exceeded```


  after changing the compute to be wrapped in process.nextTick you should see a warning and still an exception,
  I/O is still starved and stack exceeded

  ```(node) warning: Recursive process.nextTick detected. This will break in the next version of node. Please use setImmediate for recursive deferral.```


  after changing the compute to be wrapped in setImmediate you should see it work as expected, where you can kill the process by pressing any key