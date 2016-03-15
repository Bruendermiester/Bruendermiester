var express = require('express');
var wagner = require('wagner-core');
var dbInterface = require('./db/interface');
var recipes = {
      image: "testImage",
      title: "Chicken Alfrado",
      ingredients: [],
      time: "1 hour",
      favorites: ["Andrea"],
      meal: "Dinner",
      mainIngredient: "Chicken",
      notes: "It is very good"	
};
var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/testing';

 mongodb.MongoClient.connect(uri, function(err, db) {

	dbInterface.insert(db, recipes, function(error) {
		if(error) {
			console.log("error-->", error);
		}
	});
	dbInterface.sortByPerson(db, "Adam", function(error) {
		if(error) {
			console.log("error-->", error);
		}
		//process.exit(0);
	});
	// dbInterface.remove(db, function(error){
	// 	if(error){
	// 		console.log("error-->", error);
	// 	}
	// });
 });





// var app = express();
// app.listen(3000);

// console.log('Listening on port 3000!');