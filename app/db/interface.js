exports.insert = function(db, doc, callback) {
	db.collection('recipe').insert(doc, function(error, result) {
		if(error) {
			console.log(error, "insert fail");
			process.exit(1);
		}
		var query = { title : "Chicken Alfrado"};
		db.collection('recipe').find(query).toArray( function(err, docs) {
			if(err) {
				console.log("bummer");
				process.exit(1);
			}
			console.log("found docs:");
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			});
			process.exit(0);

		});

	})
	// db.collection('recipe').remove({}, function(error){

	// })
};