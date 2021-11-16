const elasticsearch = require("elasticsearch");

const client = elasticsearch.Client({
  host: "https://elastic:2LzBiAKhABLMDXJUFwDeoskw@my-deployment-d2554c.es.us-central1.gcp.cloud.es.io:9243/",
  requestTimeout: 300000,
});

client.cluster.health( function (err, resp, status) {
  console.log("Cluster status -", status);
});

module.exports = client;
