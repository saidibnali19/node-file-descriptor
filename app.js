const fs = require("fs")

fs.open("test.txt", "r", (error, fd) => {
    if (error) console.error(error)
    console.log(fd)
})