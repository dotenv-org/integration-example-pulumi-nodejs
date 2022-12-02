"use strict";
require('dotenv-vault-core').config()
const pulumi = require("@pulumi/pulumi");
const gcp = require("@pulumi/gcp");

console.log(process.env) // for debugging purposes. remove when ready.

const bucket = new gcp.storage.Bucket("my-bucket", {
    location: "US"
});

exports.bucketName = bucket.url;
