//jshint esversion:6

const express=require("Express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
// app.use("view engine","ejs");
let items=[];
var workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({Extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    let day=date();
    res.render("List",{ListTitle: day ,newListItems:items });

});
app.post("/",function(req,res){
    let item= req.body.newItem;
    if(req.body.List=== "work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
    items.push(item);
    res.redirect("/");
    }
    
});
app.get("/work",function(req,res){
    res.render("List",{ListTitle:"work List",newListItems:workItems});
});
app.get("/about",function(req,res){
    res.render("about");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
