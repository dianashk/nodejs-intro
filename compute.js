var count = 0;
function compute () {
  // performs complicated calculations continuously...
  if (count === 1000000000)
    return;
  
  compute();
}

var stdin = process.stdin;

stdin.setRawMode(true);
stdin.on('data', function (key) {
  console.log('exiting...');
  process.exit();
});

compute();
