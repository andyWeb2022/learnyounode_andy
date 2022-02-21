
const fs = require("fs")
const path = require("path")

module.exports = function myModule(directory , extname , callback){
    fs.readdir(directory ,function(err,data){
        if(err){ 
            return callback(err)
        } else{
            for(let i = 0; i < data.length; i++){
                if(path.extname(data[i]) === "." + extname){
                    callback(null,data[i])
                }
            }
        }
    })
}