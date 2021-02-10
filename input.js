let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(keypress) {
  if (keypress === '\u0003') {
    process.exit();
  }
  if (keypress === "w") {
    connection.write('Move: up');
    console.log('Move: up');
  }
  if (keypress === "a") {
    connection.write('Move: left');
    console.log('left');
  }
  if (keypress === "s") {
    connection.write('Move: down');
    console.log('down');
  } if (keypress === "d") {
    connection.write('Move: right');
    console.log('right');
  }
};

module.exports =  { setupInput };