var express = require("express");
var app = express();


app.get("/",function(req,res){
	res.send("Hi there, WELCOME TO MY ASSIGNMENT!");
});

// app.get("/speak/:title",function(req,res){
// 	console.log(req.params.title);
// 	if(req.params.title == "pig"){
// 		res.send("The pig says 'Oink'");
// 	}
// 	else if(req.params.title == "cow"){
// 		res.send("The cow says 'Moo'");
// 	}
// 	else if(req.params.title == "dog"){
// 		res.send("The dog says 'Woof Woof'");
// 	}
// 	else 
// 		res.send("not found");
// });

//short hand of above code
app.get("/speak/:animal", function(req,res){
	var sounds = {
		pig:"Oink",
		cow: "Moo",
		dog: "Woof Woof",
		cat: "I hate you human",
		goldfish: "....."
	}
	var animal = req.params.animal;
	var sound = sounds[animal];
	res.send("The " + animal + " says " + sound);
});





app.get("/repeat/:message/:no",function(req,res){
		console.log(req.params.no);
		var message = req.params.message;
		var no = Number(req.params.no);
		var result = " ";
		for(var i =0; i< no; i++){
			result += message;
		}
		res.send(result);

});



app.get("*",function(req,res){
	res.send("Sorry, page not found....What are you doing with your life?");
})
app.listen(1000, function(){
	console.log("Server is starts!");
});