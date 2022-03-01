const http = require("http")
const bl = require("bl")

http.get(process.argv[2],function(response){
    response.pipe(bl(function(err,data){
        if(err){
            console.log(err)
        } else{
            console.log(data.length)
            const result = data.toString()
            console.log(result)   
        }
    }))
})