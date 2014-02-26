var count = 0;
function compute () {
  // performs complicated calculations continuously...
  if (count === 1000000000)
    return;

  count++;
  compute();

  // nextTick will help not starve I/O but we still run out of stack
  // process.nextTick(compute);

  // setImmediate will allow I/O to be processed so you could stop the program any time
  // setImmediate(compute);
}

var stdin = process.stdin;

stdin.setRawMode(true);
stdin.on('data', function (key) {
  console.log('exiting...');
  process.exit();
});

compute();
