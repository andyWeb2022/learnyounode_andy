const fs = require("fs")
const path = require("path")

fs.readdir(process.argv[2], "utf-8", function callback(err, list) {
    if (err) {
        console.log(err)
    } else {
        for (let i = 0; i < list.length; i++) {
            if ("."+process.argv[3] === path.extname(list[i])) {
                console.log(list[i])
            } 
        }
    }
})