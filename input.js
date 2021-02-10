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
  }
  if (keypress === "a") {
    connection.write('Move: left');
  }
  if (keypress === "s") {
    connection.write('Move: down');
  } if (keypress === "d") {
    connection.write('Move: right');
  } if (keypress === "j") {
    connection.write('Say: AAAAAAAAAAAAAA');
  } if (keypress === "k") {
    connection.write('Say: SNEK');
  } if (keypress === "l") {
    connection.write('Say: BLBLBLBLBL');
  }
};

module.exports =  { setupInput };