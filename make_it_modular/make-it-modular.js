const mymodule = require("./mymodule.js")
mymodule(process.argv[2], process.argv[3], function bar(err,data) {
    if (err) {
        console.log(err)
    } else{
        console.log(data)
    }
})
