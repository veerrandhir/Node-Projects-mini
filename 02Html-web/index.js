// this file has big issue 
// and i am going to close this file 


import https from "https";

import fs from "fs";
import { error } from "console";

const server = https.createServer((req, res) => {
  if ((req.url = "/")) {
    fs.readFile("index.html", "utf-8", (error, data) => {
      if (error) {
        console.log("Got error while reading file index.html", error);
        res.writeHead(500, { "content-type ": "tex-plain" });
        res.end("Internal server Error");
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(3500);
