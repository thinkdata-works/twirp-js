/**
 * TWIRP RPC Client for Node JS
 */
var client = require("./client");
var fetch = require("node-fetch");

// requiring this file directly in node will return node-fetch as a function
// bundling with webpack may return node-fetch as an object with the function nested under "default"
const fetchFn = Object.prototype.toString.call(fetch) === '[object Function]'
    ? fetch
    : fetch.default;

const serialize = msg => Buffer.from(msg.serializeBinary());
const deserialize = responseType => res => res.arrayBuffer()
    .then(b => responseType.deserializeBinary(new Uint8Array(b)).toObject());

module.exports = client.clientFactory(fetchFn, serialize, deserialize);