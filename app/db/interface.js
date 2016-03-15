exports.insert = function(db, doc, callback) {
	db.collection('recipe').insert(doc, function(error, result) {
		if(error) {
			console.log(error, "insert fail");
			process.exit(1);
		}

	})
};

exports.sortByPerson = function(db, name, callback) {
	var query = {favorites : name};
	db.collection('recipe').find().toArray( function(err, docs) {

		console.log("here");
		if(err) {
			console.log("bummer");
			process.exit(1);
		}
		console.log("found docs:");
		docs.forEach(function(doc) {
			console.log(JSON.stringify(doc));
		});

	});
};

exports.remove = function(db, callback) {

	db.collection('recipe').remove({}, function(error){

	})
};