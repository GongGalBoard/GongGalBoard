var express        = require("express");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var app = express();

// 기본 설정
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// 라우터
app.use("/", require("./routes/board"));

// 서버 세팅
app.listen(3000, function(){
  console.log("server on!");
});
