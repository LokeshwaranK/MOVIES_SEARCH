const elasticsearch = require("elasticsearch");

const client = elasticsearch.Client({
  host: "",
  requestTimeout: 30000,
});

client.cluster.health( function (err, resp, status) {
  console.log("Cluster status -", status);
});

module.exports = client;
