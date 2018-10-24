function viewBenefits() {
	var databaseRef = firebase.database().ref("benefits/");

	databaseRef.once("value", function(snapshot){
		try {
			var logs = "สิทธิประโยชน์<br>";
			snapshot.forEach(function(benefitsSnapshot){
				var times = benefitsSnapshot.val().times;
				var benefit = benefitsSnapshot.val().benefit;
				var location = benefitsSnapshot.val().location;
				var log = "บริจาค: " + times + " ครั้งขึ้นไป ได้รับสิทธิ: " + benefit + " สามารถใช้สิทธิได้ที่: " + location;
				logs = logs + log + "<br>";
			})
			document.getElementById("benefits_data").innerHTML = logs;
		} catch (err) {
			console.log(err);
		}
	})
}