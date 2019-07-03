const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (/b/.test(key)) {
    process.stdout.write('\x07');
  }

  if (/\d/.test(key)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

});