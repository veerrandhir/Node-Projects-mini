import fs from "fs";
import { argv } from "process";
// fs.writeFileSync("newpeople.txt", "Amit ajeet and vaibhav are good friends "); // create file

// Read file
// fs.readFileSync("People.txt", "utf-8");
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
// console.log(operation, file, name);

if (operation == "write") {
  fs.writeFileSync(file + ".txt", content);
} else if (operation == "read") {
  const data = fs.readFileSync(file, "utf-8");
  console.log(data);
} else if (operation == "update") {
  fs.appendFileSync(file, content);
} else if (operation === "delete") {
  fs.unlinkSync(file);
}

// Update file using fs module
// fs.appendFileSync("People.txt", "I am following sidhhu");

// fs.unlinkSync("newpeople.txt");
