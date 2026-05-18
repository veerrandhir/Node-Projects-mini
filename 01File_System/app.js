import fs from "fs";
// checckimg os module
import os from "os";
// fs.writeFileSync("test.txt", "am giveng you some commands");
// To read a file

// const data = fs.readFileSync("test.txt", "utf-8");

// Add new line or content without deleting older one

// fs.appendFileSync("test.txt", "\n Yaar tum mera baat to suno");

// console.log(data);

// To rename file

// fs.rename("test.txt", "updatedText.txt", (err) => {
//   console.log(err);
// });
// we used async fn so need cb

// without cb

// fs.renameSync("updatedText.txt", "test.txt");
// To create a new folder using fs module
// fs.mkdirSync("myFolder");

// fs.rmdirSync("myFolder");
// to remove or delete file we use unlinkfileSync donot use delete
// fs.linkSync("test.txt");

// console.log(os);
// fs.writeFileSync("BIO.txt", "This is bio data file ");

// fs.appendFileSync(
//   "BIO.txt",
//   "\n Hello Everyone My name is Randhir kumar My Goal is to become a Software engineer",
// );

// const data = fs.readFileSync("BIO.txt", "utf-8");
// console.log(data);

// fs.mkdirSync("newFolderbymkdir");

// fs.unlinkSync("./newFolderbymkdir");
