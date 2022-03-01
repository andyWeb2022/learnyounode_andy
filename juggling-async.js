const http = require("http")
const bl = require("bl")
const result = ""
for(let i = 2; i < process.argv.length - 2;i++){

http.get(process.argv[i],function(response){
    response.pipe(bl(function(err,data){
        if(err){
            console.log(err)
        } else{
            result = data.toString()
        }console.log(result)
    }))
    })
}
