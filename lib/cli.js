// { _: Array(0), l: 8, p: '[0-9]' }
// Genpass -h 6
var argv = require('yargs-parser')(process.argv.slice(2));

// Save typing
var puts = console.log;

// data
// Password len
// mem or non-mem pass
// pattern for password
// Help
var options = {
  l: {
    description: 'Password length                      [default: null]'
  },
  c: {
    description: 'Generates a non memorable password   [default: "memorable"]'
  },
  p: {
    description: 'Pattern to match for the generated password'
  },
  h: {
    description: 'Displays this help'
  }
};

this.showHelp = function () {
  puts('Generates a memorable password\r\n');
  puts('Options:');
  // Option data become array
  var keys = Object.keys(options);

  // Build help menu
  keys.forEach(function (key) {
    puts('  -' + key + ': ' + options[key].description);
  });
};

this.run = function () {
  var MEMORABLE, generatePassword, memorable, pattern;

  // global mem
  MEMORABLE = 'memorable';

  // lib
  generatePassword = require('./password-generator'),

  // pattern
  pattern = argv.p || null;

  // help
  if (argv.h) {
    return this.showHelp();
  }

  // mem
  memorable = argv.c || MEMORABLE;
  
  // has pattern, no mem
  if (pattern) {
    pattern = new RegExp(pattern);
    memorable = false;
  }

  // len, mem?, pattern
  puts(generatePassword(argv.l, memorable === MEMORABLE, pattern));
};
