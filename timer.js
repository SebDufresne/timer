'use strict;';

const getArguments = function() {
  return process.argv.slice(2);
};

const timer = (arr,index) => {

  setTimeout(() => {
    if (/[\d]+/.test(arr[index])) {
      arr[index] < 0 ? ++arr[index] : process.stdout.write('\x07');
    } else {
      return;
    }
    if (index < arr.length - 1) timer(arr,++index);
  }, arr[index] * 1000);
};

timer(getArguments(),0);