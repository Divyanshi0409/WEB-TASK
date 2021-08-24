const fs = require("fs");

// create a folder
fs.mkdir("task", error => {
});

// create a file and write in it
console.log("Writing in file....");
fs.writeFileSync(
  "./task/curd.txt",
  "Hi! Divyanshi this side.."
);
console.log("Data written\n");

// read data of a file
console.log("Reading file...");
console.log(fs.readFileSync("./task/curd.txt", "utf8"));
console.log("\n");

// update a file
console.log("Updating the file...");
fs.appendFileSync("./task/curd.txt"," How are you doing?");
console.log("File updated\n");

// read data of appended file
console.log("Reading data of updated file...");
console.log(fs.readFileSync("./task/curd.txt", "utf8"));
console.log("\n");


// to delete file
console.log("Deleting file...");
fs.unlink("./task/curd.txt",(error)=>{
    console.log("File deleted");
});

// to remove folder
console.log("Deleting directory...");
fs.rmdir("./task",(error)=>{
    console.log("Folder deleted");
});

