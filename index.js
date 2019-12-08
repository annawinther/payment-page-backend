require("dotenv").config();

const server = require("./api/server.js");

// eslint-disable-next-line no-undef
const port = 2000;

server.listen(port, () => {
  console.log(`\n--- Server listening on port ${port} ---\n`);
});