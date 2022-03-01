const fs = require("fs") //使用fs
const buf =  fs.readFileSync(process.argv[2]) //抓路徑
const str = buf.toString() //把buffer轉成字串
const result =  str.split("\n").length - 1 //少一個空白
// console.log(result)